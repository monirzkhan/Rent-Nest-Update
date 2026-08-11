import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedPropertyCard from "@/components/shared/AnimatedPropertyCard";

const FeaturePropertyList = async () => {
  const data = await fetch(
    "https://rentnest-seven.vercel.app/api/properties",
    {
      cache: "no-store",
    }
  );

  const properties = await data.json();

  return (
    <div className="space-y-12">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-xl font-semibold md:text-4xl">
          Browse Properties and Rent
        </h2>
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {properties.data.slice(0, 6).map((property: any, index: number) => (
          <AnimatedPropertyCard
            key={property.id}
            property={property}
            index={index}
          />
        ))}
      </div>

      {/* Browse All Button */}
      <div className="flex justify-center">
        <Link href="/properties">
          <Button variant="default" className="rounded-lg bg-linear-to-r from-green-500 to-emerald-500">Browse All</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturePropertyList;