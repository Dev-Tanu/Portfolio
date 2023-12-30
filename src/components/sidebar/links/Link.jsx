import {motion} from "framer-motion"
const Link = () => {
    const items =["Homepage", "Services", "Portfolio","Contact","About"];

    const variants = {
        open:{
            transition:{
                staggerChildren: 0.1,
            },
        },
        closed:{
            transition:{
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        }
    }

    const itemvariants = {
        open:{
          y: 0,
          opacity: 1,
        },
        closed:{
            y: 50,
            opacity: 0
        }
    }
    

  return (
    <motion.div className="links" variants={variants}>
        {items.map((item) => ( 
        <a href= {`#${item}`} key={item} variants={itemvariants} whileHover={{scale:1.1 }} whileTap={{scale:0.95}}>
            {item}
        </a>
    ))}
    </motion.div>
  )
}

export default Link
