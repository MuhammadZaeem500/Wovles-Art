import HeroSection from "./_components/heroSection/heroSection";
import ServicesBanner from "./_components/serviceBanner/serviceBanner";
import ProjectCard from "./_components/projectCard/projectCard";
import CenteredOrangeButton from "./_components/button/button";
import AboutProjectSection from "./_components/aboutProject/aboutProject";
import Grid from "@mui/system/Grid";
import div from "../app/_assests/div.svg";
import div1 from "../app/_assests/div-1.svg";
import div2 from "../app/_assests/div-2.svg";
import div3 from "../app/_assests/div-3.svg";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesBanner />
      <div style={{ backgroundColor: "#0F0F12" }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 8, lg: 15 }}
          justifyContent="center"
          sx={{ maxWidth: 1240, margin: "auto" }}
        >
          <Grid size={6}>
            <ProjectCard title="Opentri" imageUrl={div1} />
          </Grid>
          <Grid size={6} sx={{ marginTop: "30px" }}>
            <ProjectCard title="Second Project" imageUrl={div} />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 8, lg: 15 }}
          justifyContent="center"
          sx={{ maxWidth: 1240, margin: "auto", mt: 4 }}
        >
          <Grid size={6}>
            <ProjectCard title="Opentri" imageUrl={div2} />
          </Grid>
          <Grid size={6} sx={{ marginTop: "30px" }}>
            <ProjectCard title="Second Project" imageUrl={div3} />
          </Grid>
        </Grid>
      </div>
      <CenteredOrangeButton />
      <AboutProjectSection />
    </div>
  );
}
