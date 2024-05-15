import React from "react";
import AboutCarousel from "../../Components/carousel/AboutCarousel";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";

function About() {
  return (
    <>
      <Header active="about" />
      <AboutCarousel />
      <div id="theme" className="target">
        <div className="container mb-5">
          <h1 className="mb-3 mt-5 green-heading">About AKGEC</h1>
          <p>
            Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad, Uttar
            Pradesh is approved by AICTE and affiliated to Dr. A.P.J. Abdul
            Kalam Technical University, Lucknow. Established in 1998, the
            college has six engineering departments offering B.Tech programs in
            twelve disciplines. The college also offers postgraduate programs in
            Computer Application (MCA) and M.Tech. in four disciplines. Our
            Institute is Accredited by NAAC A++ Grade. All five major B.Tech.
            programs are NBA accredited. The college strives for excellence and
            has been consistently maintaining excellent academic results and
            placements. The college is the first and only college in UP to
            receive the Academic Excellence Award for the Best Engineering
            College in UPTU (now AKTU) from Higher Education the Governor of UP
            for two successive years. The college has been consistently having a
            large number of students on university merit lists. The College
            students have the honour of being awarded the Chancellor's Medal for
            the highest marks across all B.Tech. Programs for five consecutive
            years since the inception of this Award in 2016. The college places
            special emphasis on collaboration with industries to groom the
            students for meeting the industry standards. The college has
            established many Centres of Excellence in collaboration with eminent
            multinational industries. The primary objective of these centres is
            to provide industry-relevant training in interdisciplinary
            state-of-the-art technologies as well as to promote applied research
            and industrial consultancy.
          </p>
        </div>

        {/* <div className="container mb-5">
          <h1 className="mb-3 mt-5 green-heading">AKGEC Conference</h1>
          <p>It is witnessed that in the past few years global warming issues are trending high. The cost of fossil fuel is increasing enormously and affecting the economic growth of the Nation. The production of Petrol, diesel and petroleum gas for the year 2022 is on hold due to decision taken by the summit.   It is therefore imperative to spread the awareness about environmental and economic issues created by the use of fossil fuel and the importance of stepping towards the green energy technology. The aim of this conference is to provide a forum for engineers, researchers, and specialists from academia, research centers and industry worldwide to discuss and present the latest developments and challenges in Green Energy and computational intelligence for sustainable Technologies. The international conference on Advancements & Key Challenges in Green Energy and Computing (AKGEC-2024) will offer themes in the engineering aspects of renewable energy and computing. The main aim of this conference will be to provide an international premier forum for the presentation of new advances and research results in the field of Green Energy, Computing and security, sustainable development, Artificial intelligence and Embedded Systems. </p>
            
        </div> */}

        <div className="container mb-5">
          <h1 className="mb-3 mt-5 green-heading">About the Department </h1>
          <p>
            The Department of Electronics and Communication Engineering at AKGEC
            was established in 1998. The department provides an outstanding
            research environment complemented by excellence in teaching. Ever
            since its inception, the department has been a pioneering academic
            centre for technical education, research, and innovation in all
            major areas of Electronics and Communication Engineering. The
            department is organized in tune with these latest developments in
            terms of curriculum, well-qualified faculty, and state-of-the-art
            labs for B.Tech. (UG course) in Electronics & Communication
            Engineering along with M.Tech. (PG course) in Electronics &
            Communication Engineering. Approved intake of B.Tech. (ECE) course
            is 180 students and for the M.Tech. (ECE) course it is 18 students.
            <br /> <br />
            The department has an adequate number of laboratories as per
            requirement (strength of students in the department and number of
            practical courses mentioned in the syllabus scheme). These
            laboratories are fully equipped with the latest/modern hardware
            kits/equipment, software tools, and consumables. ECE labs have all
            the basic as well as advanced level facilities to fulfil the
            requirements of UG, PG, and PhD level courses. These laboratories
            are fully utilized by the students and faculty members of the ECE
            department for performing practical experiments, doing Project Work,
            and Research & development (R & D) activities. ECE department also
            has established the Texas Instruments-Centre of Excellence Lab,
            NI-LabVIEW Academy, Virtual Lab (with IIT Kanpur), IoT Lab, etc. in
            collaboration with reputed industries and academic institutes.
            <br /> <br />
            The department has its Technical Society-Phoenix. The society
            organizes many technical competitions, quizzes, technical seminars,
            mock interviews, aptitude tests, project exhibitions and technical
            paper presentations for the students. ECE department also has an
            active IEEE-Communication Society student branch chapter for
            organizing/participating in various events at the National &
            International level. The department also has two technical clubs for
            the technical skill enhancement of students, namely the
            Communication Club and the Electronics Club. In the Communication
            Club, various awareness programs on the latest communication
            technologies are conducted through exhibitions, seminars, and
            projects to prepare students for the industry. In the Electronics
            Club, students engage in workshops, projects, competitions, guest
            lectures, collaborations, skill development, community outreach,
            research, networking, and regular meetings to enhance their
            understanding and practical skills in electronics
          </p>
        </div>

        {/* <div className="container mb-5">
          <h1 className="mb-3 mt-5 green-heading">About Ghaziabad </h1>
          <p>
            Ghaziabad is a city in the Indian state of Uttar Pradesh and a part
            of the NCR. It is the administrative headquarters of Ghaziabad
            district and is the largest city in western Uttar Pradesh, with a
            population of 1,729,000.Ghaziabad Municipal Corporation is divided
            into 5 zones - City Zone, Kavi Nagar Zone, Vijay Nagar Zone, Mohan
            Nagar Zone and Vasundhara Zone. The Municipal Corporation comprises
            100 wards. Well connected by roads and railways, it is a major rail
            junction for North India. It is sometimes referred to as the "Saya
            of Uttar Pradesh" because it is close to New Delhi, on the main
            route into Uttar Pradesh. Recent construction works have led to the
            city being described by a City Mayors Foundation survey as the
            second fastest-growing in the world. Situated in the Upper Gangetic
            Plains, the city has two major divisions separated by the Hindon
            River, namely Trans-Hindon on the west and Cis-Hindon on the east.
            <br />
            <br />
          </p>
          <br />
          <div className="d-flex flex-column flex-sm-row justify-content-around flexbox">
            <div className="col-3 mb-2 pe-2 flexdivs">
              <img
                src={image4}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="col-3 mb-2 pe-2 flexdivs">
              <img
                src={image5}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="col-3 mb-2 pe-2 flexdivs">
              <img
                src={image6}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
          <br />
          <br />
          <p>
            The city of Ghaziabad was founded in 1740 A.D. by Ghazi-ud-Din, who
            served as a wazir in the court of Mughal emperor Muhammad Shah, and
            named it as "Ghaziuddinnagar" after his own name. The name
            "Ghaziuddinnagar" was shortened to its present form, i.e.
            "Ghaziabad" with the opening of the Railways in 1864. During the
            Mughal period, Ghaziabad and especially the banks of the Hindon in
            Ghaziabad, remained a picnic spot for the Mughal royal family.
            <br />
            <br />
            Establishment of the Scientific Society here, during the same period
            is considered as a milestone of the educational movement launched
            by Syed Ahmad Khan. The Scinde, Punjab & Delhi Railway,
            connecting Delhi and Lahore, up till Ambala through Ghaziabad was
            opened in the same year. With the completion of
            the Amritsar-Saharanpur-Ghaziabad line of the Sind, Punjab and Delhi
            Railway in 1870, Delhi was connected to Multan through Ghaziabad,
            and Ghaziabad became the junction of the East Indian Railway and
            Sind, Punjab and Delhi Railway.
          </p>
        </div> */}

        {/* <div className="container mb-5">
          <h1 className="mb-3 mt-5 green-heading">Uttar Pradesh </h1>
          <p>
            Uttar Pradesh ('Northern Province') is a state in northern India.
            With over 200 million inhabitants, it is the most populated state in
            India as well as the most populous country subdivision in the world.
            It was created on 1 April 1937 as the United Provinces of Agra and
            Oudh during British rule, and was renamed Uttar Pradesh in 1950,
            giving it the acronym UP. The state is divided into 18 divisions and
            75 districts, with the state capital being Lucknow, and Allahabad
            serving as the judicial capital. On 9 November 2000, a new state,
            Uttaranchal (now Uttarakhand), was carved from the state's Himalayan
            hill region. The two major rivers of the state, the Ganges and
            Yamuna, join at Triveni Sangam in Prayagraj and flow further east as
            Ganges. Other prominent rivers are Gomti and Saryu. The forest cover
            in the state is 6.1% of the state's geographical area. The
            cultivable area is 82% of total geographical area and net area sown
            is 68.5% of cultivable area.
            <br />
            <br />
            The state is bordered by Rajasthan to the west, Haryana, Himachal
            Pradesh and Delhi to the northwest, Uttarakhand and an international
            border with Nepal to the north, Bihar to the east, Madhya Pradesh to
            the south, and touches the states of Jharkhand and Chhattisgarh to
            the southeast. It covers 240,928 km2 (93,023 sq mi), equal to 7.3%
            of the total area of India, and is the fourth-largest Indian state
            by area. Though long known for sugar production, the state's economy
            is now dominated by the services industry. The service sector
            comprises travel and tourism, hotel industry, real estate, insurance
            and financial consultancies. The economy of Uttar Pradesh is the
            second-largest state economy in India with ₹21.73 lakh crore (US$290
            billion) in gross domestic product and a per capita GSDP of ₹95,000
            (US$1,300).President's rule has been imposed in Uttar Pradesh ten
            times since 1968, for different reasons and for a total of 1,700
            days. The state has currently two international airports, Chaudhary
            Charan Singh Airport (Lucknow) and Lal Bahadur Shastri Airport
            (Varanasi).
            <br />
            <br />
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-around flexbox">
            <div className="col-3 mb-2 pe-2 flexdivs">
              <img
                src={image1}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="col-3 mb-2 pe-2 flexdivs">
              <img
                src={image2}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="col-3 mb-2 pe-2 flexdivs">
              <img
                src={image3}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
          <br />
          <br />
          Uttar Pradesh ranks first in domestic tourist arrivals among all
          states of India with more than 71 million, owing to its rich and
          varied topography, vibrant culture, festivals, monuments, ancient
          places of worship, and viharas. Uttar Pradesh is also home to
          three World Heritage Sites: the Taj Mahal, Agra Fort, and the
          nearby Fatehpur Sikri. Uttar Pradesh is a favoured tourist destination
          in India due to the location of Taj Mahal, nearly 69 lakhs
          (6.9 million) people visited the Taj Mahal in 2018–19, up 6% from the
          previous year when the number stood at 64 lakhs (6.4 million). The
          monument earned almost ₹78 crore (US$10 million) in ticket sales in
          2018–19. The state's tourism industry is a major contributor to
          the state's economy, growing at the rate of 21.60%.
          <p></p>
        </div> */}
      </div>

      <Footer />
    </>
  );
}

export default About;
