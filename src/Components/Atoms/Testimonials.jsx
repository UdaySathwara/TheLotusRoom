import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "Purvi Bhatt",
    text: "After attending yoga classes for 8 months,I feel my core strength has really improved .Anshika ma'am has made a challenging schedule for us. along with physical health I have gained positive mental health by making great friends here.",
    image:
      "https://images.pexels.com/photos/29351977/pexels-photo-29351977/free-photo-of-elegant-bride-in-traditional-indian-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Zeel patel",
    text: "Great place to learn and practice yoga. Here instructors are very knowledgeable. They are very good at explaining each pasture and how it is helpful. Very clean facility and quiet area. They also offers free trial classes and sepical thanks to Anshika ma'am.",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocKKM_YBsHUZRbOv8BgMSUSUAW79eLcdcHaRlbzYzCZN4IEzUg=w68-h68-p-rp-mo-br100",
  },
  {
    name: "Ruhi prajapati",
    text: "Best yoga class for all age group. My daughter enjoy here yoga so much. Superb and hardworking teacher. Personal attention is given. Highly recommend.",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjUClFiPBM8xG2McEQF3gA7G9Hw_ujk49bzsfWj7HzUKAGjl0oEwDw=w68-h68-p-rp-mo-br100",
  },
  {
    name: "Suhasini Rawal",
    text: "I have started my Yoga practice since last 2 months in Yoga Studio. My Mentor is Jagruti Ma'am. Thanks to her for all her genuine and sincere efforts for making me more flexible. She always make students to utilize their optimum potential. She is the best Yoga teacher I have ever met ❤️",
    image:
      "https://images.pexels.com/photos/30929008/pexels-photo-30929008/free-photo-of-traditional-indian-woman-in-ornate-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Hetal V Patel",
    text: "Hello myself hetal,I am connected with yoga studio from 8months It's really helpful for me.Today Pranav sir's GYM ball session very interesting and healful for me.thanks to team yoga studio",
    image:
      "https://lh3.googleusercontent.com/a-/ALV-UjXmVu3u7G8HJZatZc3pRD1mZPjwEVPfujOb22dDkjW53uwdtQfdTA=w68-h68-p-rp-mo-ba6-br100",
  },
  {
    name: "Ronak Patel",
    text: "Thank you very much,sir. I express my heartfelt gratitude towards my yoga teacher, Niharika Ma’am. She offers exceptional guidance, attention to detail, and brings about a transformative impact on our practice. Best wishes are extended to her for continued success. 👍",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwf0LT1ts58csSCr5N05qmTHMYStVvWmOXQ&s",
  },
  {
    name: "Kartik Patel",
    text: "Very good experience. My yoga instructor is anand sir. He teachs excellent yoga.When i'm join my body was not flexible but day by day body having flexibility.i feel energetic whole day.",
    image:
      "https://english.cdn.zeenews.com/sites/default/files/2017/11/17/639329-indian-men.jpg?im=Resize=(1200,900)",
  },
  {
    name: "Kosha Vyas",
    text: "Yoga Studio is the best yoga class in science City. I enjoy my class. Thank you Bhavna ma'am for being an amazing yoga teacher , who guide and motivate us every day in our journey towards wellness...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaTNt_aqU5hi7NJ_FyypTDu2oCzEHWcCGDw&s",
  },
];

export default function Testimonials() {
  return (
    <div className="py-14 bg-[#eddbcc]">
    <div className="space-y-6 px-6 text-center max-w-xl mx-auto mb-5">
      <h1 className="uppercase font-semibold text-orange-600 text-lg md:text-xl">
        OUR TESTIMONIALS
      </h1>
      <p className="font-semibold text-2xl md:text-3xl">
        What People Are Saying
      </p>
    </div>

    <div className="container mx-auto px-4">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={15}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="my-6 flex flex-col p-6 md:p-8 shadow-lg rounded-xl mx-2 md:mx-4 bg-white relative">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-14 h-14 md:w-16 md:h-16 object-cover"
                />
                <p className="text-lg md:text-xl font-bold text-black/80">
                  {testimonial.name}
                </p>
              </div>
              <div className="py-4 md:py-6 space-y-4">
                <p className="text-sm text-gray-500">{testimonial.text}</p>
                <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
              </div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="Quote"
                className="w-8 h-8 md:w-10 md:h-10 absolute top-4 right-4 bg-[#f5dfcd] p-1 md:p-2 rounded-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  );
}
