import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items =[
  {
    id: 1,
    title: "React Commerce",
    img:"https://images.pexels.com/photos/19385051/pexels-photo-19385051/free-photo-of-boats-pulled-out-on-a-wet-beach-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc :"lksajhjhd ncbgstiro mfkgopuwna mccjyghjn skjskijd dkcppowutr mnchhux zmkkshhsh hshddjkfoofn djddj dmdjj smdkdkfujeujndndn hdbejg kiowiuieiu"
  },

  {
    id: 2,
    title: "Next.Js Commerce",
    img:"https://images.pexels.com/photos/18931202/pexels-photo-18931202/free-photo-of-a-white-building-with-trees-in-front-of-it.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc :"lksajhjhd ncbgstiro mfkgopuwna mccjyghjn skjskijd dkcppowutr mnchhux zmkkshhsh hshddjkfoofn djddj dmdjj smdkdkfujeujndndn hdbejg kiowiuieiu"
  },
  {
    id: 3,
    title: "Vanilla js App",
    img:"https://images.pexels.com/photos/14781215/pexels-photo-14781215.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc :"lksajhjhd ncbgstiro mfkgopuwna mccjyghjn skjskijd dkcppowutr mnchhux zmkkshhsh hshddjkfoofn djddj dmdjj smdkdkfujeujndndn hdbejg kiowiuieiu"
  },
  {
    id: 4,
    title: "Music App",
    img:"https://images.pexels.com/photos/19354102/pexels-photo-19354102/free-photo-of-a-sunset-with-boats-on-the-water-and-a-beach.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc :"lksajhjhd ncbgstiro mfkgopuwna mccjyghjn skjskijd dkcppowutr mnchhux zmkkshhsh hshddjkfoofn djddj dmdjj smdkdkfujeujndndn hdbejg kiowiuieiu"
  },
];

const Single = ({item}) => {
    const ref = useRef();

    
     const {scrollYProgress} = 
     useScroll({ target: ref,
        // offset:["start start" , "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300,300]); // applying animation to the text beside image

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                  <img src={item.img} alt="" />
                  </div>
                    <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                   <button>See Demo</button>
                   </motion.div>
              </div>
           </div>
        </section>
    );
};

const Portfolio = () => {

const ref = useRef();

const {scrollYProgress} = 
useScroll({ target: ref, offset:["end end", "start start"]}); 

const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,  //using this we are adding animation to the line
});

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item = {item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio
