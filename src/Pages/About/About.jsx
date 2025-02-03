import Container from "../../Components/Container/Container";
import Featured from "../../Components/Home/Featurers/featured";
import image2 from "../../assets/common/about-2.png";
import image1 from "../../assets/common/about.png";
import image3 from "../../assets/common/login.png";

const About = () => {
  return (
    <div>
      {/* about us sections  */}
      <div className="flex gap-5 py-10 items-center bg-white shadow px-20 rounded">
        {/* image gallery  */}
        <div className="flex gap-3 w-full">
          <img
            className="h-[530px] w-[300px] rounded"
            src={image1}
            alt="about"
          />
          <div className="space-y-[10px]">
            <img className="h-[259px] w-[305px]" src={image2} alt="about" />
            <img className="h-[259px] w-[305px]" src={image3} alt="about" />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center">
            <p className="text-3xl text-primary font-semibold">
              About Grabit Online Store
            </p>
            <p className="text-secondary font-semibold text-center">
              "Good Food, Clean Roots"
            </p>
          </div>
          <p>
            We’re a passionate team bringing you fresh, organic food straight
            from trusted local farms. No chemicals, no shortcuts—just honest
            food for a healthier life
          </p>
          <div className="mt-2 space-y-2">
            <div>
              <p className="text-xl text-secondary font-semibold">
                Why Choose <span className=" text-primary"> Organic?</span>
              </p>
              <p>
                Organic food is free from harmful pesticides and synthetic
                additives, making it a healthier choice. It supports local
                farmers and protects the environment. With Memories Organic
                Food, you can trust that every product is fresh, safe, and
                naturally grown.
              </p>
            </div>
            <div>
              <p className="text-xl text-secondary font-semibold">
                Seasonal Organic <span className=" text-primary">Foods</span>
              </p>
              <p>
                Eating seasonal foods means enjoying fruits and vegetables at
                their peak freshness. They are more nutritious, tastier, and
                environmentally friendly. Our selection includes a variety of
                seasonal produce, ensuring you get the best nature has to offer.
              </p>
            </div>
            <div>
              <p className="text-xl text-secondary font-semibold">
                About Our{" "}
                <span className=" text-primary">Organic Food Website</span>
              </p>
              <p>
                Memories Organic Food is dedicated to providing fresh, natural,
                and chemical-free products. We connect farmers with consumers,
                ensuring quality and sustainability. Our goal is to promote a
                healthier lifestyle with organic and ethically sourced food.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Container>
        {/* our services */}
        <div className="mt-10">
          <div className="text-center space-y-2 w-[400px] flex flex-col items-center mx-auto">
            <p className="text-secondary font-semibold text-2xl">
              Our <span className="text-primary">Services</span>
            </p>
            <p className="">
              Customer service should not be a department. It should be the
              entire company.
            </p>
          </div>
          <Featured />
        </div>
      </Container>
    </div>
  );
};

export default About;
