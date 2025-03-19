import React from "react";
import BackToTop from "../Components/Atoms/BacktoTop";

function Courses() {

    const courses = [
        {
          name: "Psycho Yoga Therapy Course",
          time: "90 HRS",
          fees: "14999",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/4498220/pexels-photo-4498220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Meditation Certification Course",
          time: "20 HRS",
          fees: "4999",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          name: "Pranayama Certification Course",
          time: "20 HRS",
          fees: "4999",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/6648550/pexels-photo-6648550.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          name: "Aerial Yoga Certification Course",
          time: "60 HRS",
          fees: "20000",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/4324101/pexels-photo-4324101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Yoga instructor certification course ",
          time: "100 HRS",
          fees: "16999",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/6246659/pexels-photo-6246659.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          name: "Diet Therapy and Yoga Therapy Teacher Training",
          time: "3 Months",
          fees: "20000",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Yoga Nidra Teacher Training Certification Course",
          time: "100 HRS",
          fees: "10000",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/13347104/pexels-photo-13347104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Prenatal/Postnatal Certification Course",
          time: "85 HRS",
          fees: "19999",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/7155545/pexels-photo-7155545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Weight loss teacher training course",
          time: "50 HRS",
          fees: "14999",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/5714344/pexels-photo-5714344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Kids Yoga Certification Course",
          time: "70 HRS",
          fees: "14999",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/5063299/pexels-photo-5063299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          name: "Inner Transformation Workshop",
          time: "2 DAYS",
          fees: "4999",
          schedule: "Monday - Friday",
          image:
            "https://plus.unsplash.com/premium_photo-1700061656514-188db09b885e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5uZXIlMjBUcmFuc2Zvcm1hdGlvbiUyMFdvcmtzaG9wJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Yoga Nindra Teacher Training Certification Course",
          time: "100 HRS",
          fees: "10000",
          schedule: "Monday - Friday",
          image:
            "https://images.pexels.com/photos/11387441/pexels-photo-11387441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },

      ];

  return (
    <div>
      <BackToTop />

      <section
        className="flex flex-col items-center justify-center text-center h-screen w-full bg-cover bg-center bg-no-repeat relative p-6"
        style={{
          backgroundImage:
            "url('https://files.oaiusercontent.com/file-Ci2D3XhG5wBftasvsfqFhW?se=2025-03-18T12%3A09%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D082663d9-be6b-4b94-914c-10483406e759.webp&sig=CeyeYkYWYqUKQOD1l5NRuauf4kGAxN%2BhZTqx0ApoZIM%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Courses
          </h2>
          <p className="text-lg md:text-xl text-white mt-4 font-serif">
            Join our yoga courses at our studio to deepen your practice, enhance
            mindfulness, and achieve holistic wellness through expert-led
            sessions.
          </p>
        </div>
      </section>

      <div className="max-w-full mx-auto bg-gray-50 p-6 md:p-12  rounded-lg">
        <h1 className="text-3xl font-bold text-center text-orange-600 m-6">
          Yoga Certification Course
        </h1>

        <p className="text-gray-700 leading-relaxed mb-4">
          Yoga teacher training is the training of teachers (and private
          trainers) of yoga as exercise, consisting mainly of the practices of
          yoga asanas, leading to certification. Such training is accredited by
          the Yoga Alliance (USA), British Wheel of Yoga (UK), BDY (Germany),
          and the European Union of Yoga (Europe). India is the best place to
          learn and implement yoga practices. The Yoga Alliance sets standards
          for 200-hour and 500-hour Recognized Yoga Teacher levels, which are
          accepted in America and other countries. India is the best place to
          learn and implement yoga practices. A yoga teacher training in India
          will give endless openings to connect with people, to consolidate your
          practice. India is known for being a veritably affordable choice as
          some of the cheapest yoga teacher training courses are held in India.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-4">
          Why Do Yoga Courses?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <p className="text-gray-700 mb-4">
            The Yoga teacher training courses will help to gain a deep
            experience of the conception yoga training. Yoga teacher training
            program will prepare the practitioner physically as well as mentally
            for the integration of their physical, emotional, internal and
            spiritual capacities.
          </p>
          <li>Enhance your knowledge and skills in yoga.</li>
          <li>
            Deepen your understanding of yoga training and enhance practice.
          </li>
          <li>Investment in personal health, growth, and mindfulness.</li>
          <li>Learn history, Sanskrit insights, and yogic science.</li>
          <li>Develop leadership, public speaking, and confidence.</li>
          <li>Growing demand for Yoga professionals post-COVID.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-4">
          Why Choose Our Academy of Yogic Science?
        </h2>
        <p className="text-gray-700 mb-4">
          At The Lotus Room, we emphasize structured schedules and individual
          attention to sharpen students' skills. All instructors are certified
          (500-2000 hours of teacher training). We foster a welcoming
          environment,ensuring all students receive equal opportunities and
          guidance.We always believe, walking in the path of yoga is more
          meaningful when others walk the path with us. The bonds that are
          created during teacher training last a lifetime. Immerse yourself in
          community and deepen your connection with Breathe, our teachers, and
          fellow students.
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mt-6 mb-4">
          Career Opportunities After Yoga Certification
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>National & International Trainers</li>
          <li>Yoga & Naturopathy Instructors</li>
          <li>Clinical Psychologist</li>
          <li>Consultancy & Studio Manager</li>
          <li>Yoga Teacher & Therapist</li>
          <li>Research & Yoga Festival Organizer</li>
        </ul>
      </div>

        {/* Courses */}
        <div className="flex flex-col justify-center items-center pb-10 min-h-screen bg-gray-50">
        <span className="text-4xl mt-6 text-center font-medium">
          Our Exciting Courses
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl mx-auto py-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 duration-300"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="p-2 flex flex-col gap-1 text-center bg-[#eddbcc] text-black mx-8 rounded-xl text-xs text-extra-bold relative bottom-5">
                <p className="flex justify-center items-center">
                  <strong>
                    <span className="material-symbols-outlined px-2">
                      calendar_today
                    </span>
                  </strong>
                  {course.schedule}
                </p>
                <p className="flex justify-center items-center">
                  <strong>
                    <span class="material-symbols-outlined px-2">payments</span>
                  </strong>
                  COURCE FEES: {course.fees}
                </p>
                <p className="flex justify-center items-center">
                  <strong>
                    <span className="material-symbols-outlined px-2">
                      schedule
                    </span>
                  </strong>
                  {course.time}
                </p>
              </div>
              <h4 className="text-xl font-semibold text-center bg-white text-black p-2">
                {course.name}
              </h4>
              <div className="flex justify-center items-center p-5">
                <button className="bg-[#eddbcc] text-black font-medium py-2 px-4 rounded-full hover:border border-2 hover:bg-white  hover:border-[#dfb18c] hover:text-[#dfb18c] flex justify-center items-center">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
