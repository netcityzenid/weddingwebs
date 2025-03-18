import { useState, useEffect, FormEvent, useRef } from "react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import Image from "next/image";
import border from "../../../public/images/border.png";

interface FormData {
  _id: string;
  name: string;
  comment: string;
  attendance: boolean;
  createdAt: string;
}

export default function Home() {
  const [formData, setFormData] = useState({ name: "", comment: "", attendance: "" });
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);
  const [showNotification, setShowNotification] = useState(false); // Tambahkan state notifikasi
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/submit");
    const data: FormData[] = await res.json();
    setSubmittedData(data);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ name: "", comment: "", attendance: "" });

      // Tampilkan notifikasi
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Sembunyikan setelah 3 detik

      fetchData();
    }
  };

  return (
    <div className="relative">
      <form className="text-sm px-5" onSubmit={handleSubmit}>
        <div className="w-full">
          <div className="mb-2">
            <input
              className="py-2 rounded px-2 w-full border shadow-sm border-transparent focus:border-[#d6b064] focus:outline-none"
              type="text"
              placeholder="Nama"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-0.5">
            <textarea
              className="py-2 px-2 w-full rounded min-h-20 shadow-sm border border-transparent focus:border-[#d6b064] focus:outline-none"
              placeholder="Ucapan"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              required
            />
          </div>
          <div className="relative">
            <select
              className="appearance-none w-full h-9 pl-2 border border-transparent focus:border-[#d6b064] focus:outline-none rounded bg-white text-black"
              value={formData.attendance}
              onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              required
            >
              <option value="" disabled>
                Konfirmasi Kehadiran
              </option>
              <option value="true">Hadir</option>
              <option value="false">Tidak Hadir</option>
            </select>
          </div>
        </div>
        <button className="py-2 px-6 bg-[#d6b064] w-full mt-4 rounded-md text-white font-semibold" type="submit">
          Kirim Ucapan
        </button>
      </form>

      {/* Notifikasi Ucapan Terkirim */}
      {showNotification && <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">✅ Ucapan berhasil dikirim!</div>}
    </div>
  );
}
