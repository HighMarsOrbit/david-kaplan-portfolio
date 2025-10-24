import ProjectHeader from "@/app/components/projectpages/projectHeader.jsx";
import ProjectSection from "@/app/components/projectpages/projectSection";
import { projectsData } from "@/utils/data/projects-data.js";

export default function FrontHub() {
  const project = projectsData[0];
  return (
    <div className="flex flex-col items-center">
      <ProjectHeader title={project.name} />
      <ProjectSection
        title="Project Summary"
        description="The front hub is the part that connects the front rims of the car to the shaft coming from the gearbox. As the direct interface between the front wheels of the car and the drivetrain, it sees some of the most load of any component on the car. Additionally, the brake rotors mount to it, making it very important for the hub to be stiff and sturdy. This year, the team's goal was to decrease the weight of the hub as much as possible in order to decrease our outboard unsprung mass, which would help us greatly with maneuverability."
        image="/projects/baja_car.jpg"
      />
      <ProjectSection
        title="Last Year's Design"
        description="The front hub is the part that connects the front rims of the car to the shaft coming from the gearbox. As the direct interface between the front wheels of the car and the drivetrain, it sees some of the most load of any component on the car. Additionally, the brake rotors mount to it, making it very important for the hub to be stiff and sturdy. This year, the team's goal was to decrease the weight of the hub as much as possible in order to decrease our outboard unsprung mass, which would help us greatly with maneuverability."
        image="/projects/baja_car.jpg"
      />
    </div>
  );
}
