'use client';

import { useState } from 'react';

type Reservation = {
  name: string;
  date: string;
  time: string;
  guests: number;
};

// Dummy seed data
const existingReservations: Reservation[] = [
  { name: 'John Doe', date: '2026-05-01', time: '18:00', guests: 2 },
  { name: 'Jane Smith', date: '2026-05-01', time: '19:00', guests: 4 },
];

export default function BookingForm() {
  const [form, setForm] = useState<Reservation>({
    name: '',
    date: '',
    time: '',
    guests: 2,
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.name === 'guests'
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const conflict = existingReservations.find(
      (r) => r.date === form.date && r.time === form.time
    );

    if (conflict) {
      setMessage('Sorry, that time is already booked.');
      return;
    }

    setMessage('Reservation confirmed! We look forward to seeing you.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded"
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded"
      />

      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded"
      />

      <select
        name="guests"
        value={form.guests}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      >
        {[1,2,3,4,5,6].map((num) => (
          <option key={num} value={num}>
            {num} {num === 1 ? 'Guest' : 'Guests'}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
      >
        Reserve Table
      </button>

      {message && (
        <p className="text-center mt-4 text-sm">
          {message}
        </p>
      )}
    </form>
  );
}