import ServiceCard from './ServiceCard'
const SERVICES = [
  {
    price: 49.99,
    name: 'Basic Maintenance Package',
    desc: 'Best for routine upkeep and everyday driving',
    pros: [
      'Conventional Oil Change (up to 5 quarts)',
      'Brake Inspection',
      'Tire Rotation',
      'Battery Health Test',
    ],
  },
  {
    price: 99.99,
    name: 'Comprehensive Care Package',
    desc: 'Great for ensuring your car stays in excellent shape.',
    pros: [
      'Conventional Oil Change (up to 5 quarts)',
      'Brake System Check',
      'Tire Rotation and Balancing',
      'Coolant System Inspection',
      'Multi-Point Vehicle Inspection',
    ],
  },

  {
    price: 129.99,
    name: 'Road-Ready Package',
    desc: 'Best for prepping your vehicle for long trips',
    pros: [
      'Full Synthetic Oil Change',
      'Tire Rotation, Balancing, and Alignment',
      'Complete Brake Inspection ',
      'Fluid Flush (Coolant or Brake Fluid)',
      'Detailed Engine Diagnostic',
      'Cabin and Engine Air Filter Replacement',
      'Headlight and Taillight Check',
      'Emergency Kit Check and Refill',
    ],
  },
  {
    price: 149.99,
    name: 'Premium Protection Package',
    desc: 'Perfect for top-tier maintenance and long-term engine care.',
    pros: [
      'Full Synthetic Oil Change (up to 5 quarts)',
      'Tire Rotation, Balancing, and Alignment',
      'Complete Brake Inspection ',
      'Fluid Flush (Coolant or Brake Fluid)',
      'Detailed Engine Diagnostic',
      'Cabin and Engine Air Filter Replacement',
      'Complimentary Car Wash',
    ],
  },
]
export default function ServicePackage() {
  return (
    <div className="px-4 py-10 md:px-6 min-[1441px]:px-0 md:py-10">
      <div className="mx-auto max-w-[1440px] ">
        <h2 className="text-white font-bold md:text-3xl text-2xl mb-6">
          Drive Confidently with Fixinmoto’s Service Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-3 gap-5">
          {SERVICES.map((s, i) => (
            <div key={i}>
              <ServiceCard
                price={s.price}
                name={s.name}
                desc={s.desc}
                pros={s.pros}
                featured={i === SERVICES.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
