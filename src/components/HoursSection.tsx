type Hours = {
  day: string;
  hours: string;
};

const hoursData: Hours[] = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '4:00 PM – 10:00 PM' },
  { day: 'Wednesday', hours: '4:00 PM – 10:00 PM' },
  { day: 'Thursday', hours: '4:00 PM – 11:00 PM' },
  { day: 'Friday', hours: '4:00 PM – 12:00 AM' },
  { day: 'Saturday', hours: '12:00 PM – 12:00 AM' },
  { day: 'Sunday', hours: '12:00 PM – 9:00 PM' },
];

export default function HoursSection() {
  return (
    <section className="w-full bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto text-center">
        
        <h2 className="text-3xl font-display mb-8">
          Hours of Operation
        </h2>

        {/* Hours */}
        <div className="space-y-3 mb-10">
          {hoursData.map((item) => (
            <div
              key={item.day}
              className="flex justify-between border-b border-gray-200 pb-2"
            >
              <span className="font-medium">{item.day}</span>
              <span className="text-gray-600">{item.hours}</span>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-gray-700">
          <p className="font-medium">Hot Stuff Dining</p>
          <p>123 Flame Street, Hartford, CT 06103</p>
          <p>(860) 555-0198</p>
        </div>

      </div>
    </section>
  );
}