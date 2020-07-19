import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PrimaryAppBar from "./Appbar";
import SubjectInput from "./InputCards/subjectInput";
import SectionInput from "./InputCards/sectionInput";
import TeacherInput from "./InputCards/teacherInput";
import SubjectTable from "./Tables/subjectTable";
import SectionTable from "./Tables/sectionTable";
import TeacherTable from "./Tables/teacherTable";

const useStyles = makeStyles((theme) => ({
  cardHolder: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  card: {},
}));

const Exsubjects = [
  ["DBMS", "CS101", 3],
  ["AOA", "CS301", 3],
  ["DBMS Lab", "CS101L", 2],
];
const ExSections = [
  ["Section A 18", "CS18A"],
  ["Section B 18", "CS18B"],
  ["Section C 18", "CS18C"],
];
const worthyTeachers = [
  ["Dr. Fareed Jafri", "101"],
  ["Dr. Awais", "102"],
  ["Dr. Afzal", "103"],
];

const Home = () => {
  const classes = useStyles();

  const [subjects, setSubjects] = React.useState(Exsubjects);
  const [sections, setSections] = React.useState(ExSections);
  const [teachers, setTeachers] = React.useState(worthyTeachers);

  console.log(subjects);
  console.log(sections);
  console.log(teachers);
  return (
    <div>
      <PrimaryAppBar />
      <div className={classes.cardHolder}>
        <SubjectInput
          className={classes.card}
          subjects={subjects}
          setSubjects={setSubjects}
        />
        <SectionInput
          className={classes.card}
          sections={sections}
          setSections={setSections}
        />
        <TeacherInput
          className={classes.card}
          teachers={teachers}
          setTeachers={setTeachers}
        />
      </div>
      <div className={classes.cardHolder}>
        <SubjectTable subjects={subjects} setSubjects={setSubjects} />
        <SectionTable sections={sections} setSections={setSections} />
        <TeacherTable teachers={teachers} setTeachers={setTeachers} />
      </div>
    </div>
  );
};

export default Home;