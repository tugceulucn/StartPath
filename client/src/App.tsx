import { useState, useEffect } from "react";
import axios from "axios";

type Venture = { id: number; name: string };
type Document = { id: number; title: string };

function App() {
  const [name, setName] = useState("");
  const [ventures, setVentures] = useState<Venture[]>([]);
  const [docs, setDocs] = useState<Document[]>([]);
  const [docTitle, setDocTitle] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/ventures").then(res => setVentures(res.data));
    axios.get("http://localhost:5000/api/documents").then(res => setDocs(res.data));
  }, []);

  const addVenture = () => {
    axios.post("http://localhost:5000/api/ventures", { name }).then(res => {
      setVentures([...ventures, res.data]);
      setName("");
    });
  };

  const addDocument = () => {
    axios.post("http://localhost:5000/api/documents", { title: docTitle }).then(res => {
      setDocs([...docs, res.data]);
      setDocTitle("");
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">VentureDesk MVP</h1>

      <div className="mb-6">
        <h2 className="font-semibold">Yeni Girişim Oluştur</h2>
        <input
          type="text"
          placeholder="Girişim Adı"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-1 mr-2"
        />
        <button onClick={addVenture} className="bg-blue-500 text-white px-2 py-1">Ekle</button>
        <ul>
          {ventures.map(v => <li key={v.id}>{v.name}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Belge Oluştur (SWOT/Canvas)</h2>
        <input
          type="text"
          placeholder="Belge Başlığı"
          value={docTitle}
          onChange={e => setDocTitle(e.target.value)}
          className="border p-1 mr-2"
        />
        <button onClick={addDocument} className="bg-green-500 text-white px-2 py-1">Ekle</button>
        <ul>
          {docs.map(d => <li key={d.id}>{d.title}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
