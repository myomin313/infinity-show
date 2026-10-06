'use client'

export default function WhyOstInfinity() {
  const benefits = [
    {
      icon: '/assets/images/icons/hr/mobility.png',
      title: 'Mobility',
      description:
        'We enable you to move freely with our job tickets, job (e-)bikes and free parking opportunities.'
    },
    {
      icon: '/assets/images/icons/hr/work-env.png',
      title: 'Work environment',
      description:
        'Collaboration, communication, or deep focus – in our modern office buildings you will find the perfect work environment. Free drinks and food and meal allowances included.'
    },
    {
      icon: '/assets/images/icons/hr/health.png',
      title: 'Health and wellbeing',
      description:
        'We care for your health and wellbeing and besides various health promotion measures we offer you a group accident insurance and additional insurance offers at discounted rates.'
    },
    {
      icon: '/assets/images/icons/hr/finance.png',
      title: 'Financial stability',
      description:
        'We provide financial stability by offering attractive salaries, company pension schemes, participation in our Group Share Plan, as well as bonuses, subsidies and discounts.'
    },
    {
      icon: '/assets/images/icons/hr/hybrid.png',
      title: 'Hybrid work',
      description:
        'Collaborate and exchange on-site or work remotely several days a week in line with business needs and local regulations. Our hybrid working model combines the best of both worlds.'
    },
    {
      icon: '/assets/images/icons/hr/flexible.png',
      title: 'Flexible working hours',
      description:
        'We want your job to fit your life situation and offer flexible working time models, childcare allowance, or the possibility to study alongside your job.'
    },
    {
      icon: '/assets/images/icons/hr/global.png',
      title: 'Internationality',
      description:
        'Our market infrastructures are globally connected. Working with us means collaborating with like-minded colleagues across over 7 locations in more than 27 countries.'
    },
    {
      icon: '/assets/images/icons/hr/development.png',
      title: 'Development',
      description:
        'We promote individual development by offering internal development programmes, mentoring, further education and training budgets.'
    }
  ]

  return (
    <section className="px-6 py-35">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#F98D11] to-[#199AE2] p-[2px] rounded-xl">
            <div className="rounded-xl bg-[#111865]/90 p-14 text-lg">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">WHY OST INFINITY?</h2>
            <p className="mb-15 text-white/90">
                We are committed to providing a work environment where everyone feels welcome and can reach their
                full potential. Our standards go far beyond simply matching candidates with the right position.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
                {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-5 mt-5">
                    <img src={item.icon} alt={item.title} className="w-12 h-12 mt-1" />
                    <div className="text-lg">
                    <h4 className="mb-3 font-semibold text-white">{item.title}</h4>
                    <p className="text-white/80">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    </section>
  )
}
