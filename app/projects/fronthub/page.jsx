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
        description="In order to allow the car to turn without the use of a differential, our front drivetrain uses a sprag clutch to allow wheels to slip if they are spinning faster than the drivetrain. Last year, this sprag clutch was mounted within the front hub itself. This necessitated two bearings to support the sprag clutch as well as signifcant amounts of material to retain the sprag clutch and ensure appropriate stiffness. All these requirements made the front hub quite heavy."
        image="/projects/front_hub_old.png"
      />
      <ProjectSection
        title="This Year's Design"
        description="This year, I had the idea to move the sprag clutch inboard to the front gearbox. The reasoning was that it would remove the sprag and the bearings from the upright, which would significantly decrease the weight. Additionally, without the bearings in the hub, we wouldn't need all of the supporting material, further saving mass. Reducing mass on the upright is of the highest priority, since decreasing our outboard unsprung mass is better than almost any other mass saving due to substantial increases in manueverability and ease of handling. Additionally, since wheel bearings are required to be listed at a 3 times cost multiplier on the Baja SAE Cost Report competition, moving these three bearings inboard saves substantial amounts of money on the cost report. Moving the bearings out of the hub also allowed us to design the outboard such that we could apply pretension to the entire suspension stack, increasing our reliability. Even further, I designed the hub to fit within the bounding box of the rear hub, so we can use the same spline stock for both the front and rear hubs."
        image="/projects/front_hub_new.png"
      />
      <ProjectSection
        title="Analysis"
        description="To validate the performance of the hub, I ran FEA analysis using real load cases the team obtained from a wheel force transducer test. I optimized the design so that we used the least material possible, with an FOS just above one. The team designs components for only 16 hours of total runtime, so it is desirable to have parts operating extremely close to their material limits since we do not have to worry too much about fatigue. Mass savings are more important. I also made sure that the hub performed at least as good or better than last year's hub as part of a comparative analysis. Since we know that last year's hub held up, if the new hub can handle the same loads, it should also hold."
        image="/projects/new_hub_fea.png"
      />
    </div>
  );
}
