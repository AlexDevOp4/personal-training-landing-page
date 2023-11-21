import Image from 'next/image'
import personalTrainer from '../images/personal-trainer.jpeg'
import nutrionals from '../images/nutrionals.jpg'
const people = [
  {
    name: 'Personal Training',

    imageUrl: personalTrainer,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Virtual Coaching',

    imageUrl: personalTrainer,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Nutrition Counseling',

    imageUrl: nutrionals,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Services
        </h2>
      </div>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        {people.map((person) => (
          <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
            <Image
              height={192}
              width={200}
              className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
              {person.name}
            </h3>
            <p className="text-sm leading-6 text-gray-400">{person.role}</p>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <button
                  type="button"
                  className="rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
