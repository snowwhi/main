import './index.css'
import Card from './Components/Card.jsx'
function App() {
 
 let namearray=['khadija','kakak','zohan','Azlan']
 let Array=[
  'img (1).jfif',  'img (2).jfif',  'img (3).jfif',  'img (4).jfif',
  'img (5).jfif',  'img (6).jfif',  'img (7).jfif',  'img (8).jfif',
  'img (9).jfif',  'img (10).jfif', 'img (11).jfif', 'img (12).jfif',
  'img (13).jfif', 'img (14).jfif', 'img (15).jfif', 'img (16).jfif',
  'img (17).jfif', 'img (18).jfif', 'img (19).jfif', 'img (20).jfif',
  'img (21).jfif', 'img (22).jfif', 'img (23).jfif', 'img (24).jfif',
  'img (25).jfif', 'img (26).jfif', 'img (27).jfif', 'img (28).jfif',
  'img (29).jfif', 'img (30).jfif', 'img (31).jfif', 'img (32).jfif',
  'img (33).jfif', 'img (34).jfif', 'img (35).jfif', 'img (36).jfif',
  'img (37).jfif', 'img (38).jfif', 'img (39).jfif', 'img (40).jfif',
  'img (41).jfif', 'img (42).jfif', 'img (43).jfif', 'img (44).jfif',
  'img (45).jfif', 'img (46).jfif', 'img (47).jfif', 'img (48).jfif',
  'img (49).jfif', 'img (50).jfif', 'img (51).jfif', 'img (52).jfif',
  'img (53).jfif', 'img (54).jfif', 'img (55).jfif', 'img (56).jfif',
  'img (57).jfif', 'img (58).jfif', 'img (59).jfif', 'img (60).jfif',
  'img (61).jfif', 'img (62).jfif', 'img (63).jfif', 'img (64).jfif',
  'img (65).jfif', 'img (66).jfif', 'img (67).jfif', 'img (68).jfif',
  'img (69).jfif', 'img (70).jfif', 'img (71).jfif', 'img (72).jfif',
  'img (73).jfif', 'img (74).jfif', 'img (75).jfif', 'img (76).jfif',
  'img (77).jfif', 'img (78).jfif', 'img (79).jfif', 'img (80).jfif',
  'img (81).jfif', 'img (82).jfif', 'img (83).jfif', 'img (84).jfif',
  'img (85).jfif', 'img (86).jfif', 'img (87).jfif', 'img (88).jfif',
  'img (89).jfif', 'img (90).jfif', 'img (91).jfif', 'img (92).jfif',
  'img (93).jfif', 'img (94).jfif', 'img (95).jfif', 'img (96).jfif',
  'img (97).jfif', 'img (98).jfif', 'img (99).jfif']

  return (
    <>
     <h1 className='bg-blue-700 rounded-3xl text-black'>Tailwind + React Props practice</h1>
    <div className='flex'>
         <Card imgName={Array[0]} name={namearray[0]} btntext="love you" description='hi, my name is khadija Hanif i am 22 yaers old'/>
         <Card name={[namearray[1]]} btntext='like you' description='hi,my name is asia i am  24 years old'/>
         <Card name={[namearray[2]]} btntext='beat you' description='hi,my name is zohan i am  3 years old'/>
    </div>
    </>
  )
}

export default App
