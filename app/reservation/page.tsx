import BookingForm from "../../src/components/BookingForm";

export default function BookingPage() {
  return (
    <main className="px-6 py-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-display mb-6 text-center">Book a Table</h1>
        <BookingForm />
      </div>
    </main>
  );
}
