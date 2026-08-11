"use client";

import { motion } from "framer-motion";
import PropertyCard from "./properyCard";

interface AnimatedPropertyCardProps {
  property: any;
  index: number;
}

const AnimatedPropertyCard = ({
  property,
  index,
}: AnimatedPropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      <PropertyCard property={property} />
    </motion.div>
  );
};

export default AnimatedPropertyCard;