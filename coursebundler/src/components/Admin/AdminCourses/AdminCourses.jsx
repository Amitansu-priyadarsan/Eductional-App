import {Box, Button, Grid, Heading, HStack, Table, TableCaption, TableContainer ,Tbody,Td,Th,Thead, Tr,Image, useDisclosure} from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import CourseModal from './CourseModal'

const AdminCourses = () => {

const courses=[{

  _id:"adajhdasbakjsjashgiasjdklas",
  title:"React Course",
  category:"Web Develepment",
  poster:{
   url:"  https://www.careersinaudit.com/getasset/45b80f0b-1410-4675-99e6-c6e2885214d4/ "
  },
  createdBy:"amitansu priyadarsan",
  views:123,
  numOfVideos:12,

},]

const{ isOpen, onClose, onOpen} = useDisclosure();

const courseDetailsHandler = userId =>{
  onOpen();
};
const deleteButtonHandler = userId =>{
  onOpen();
};

const  deleteLectureButtonHandler = (courseId,lectureId)=>{
  console.log(courseId)
  console.log(lectureId)

}
const addLectureHandler = (e,courseId,title,description,video) =>{
  e.preventDefault();

}



  return (
    <Grid  css={{
      cursor:`url(${Cursor}), default`
    }} minH={`100vh`}  templateColumns={['1fr','5fr 1fr']}>
  
      <Box p={["0" , "8"]} overflow="auto">
        <Heading
        textTransform={`uppercase`}
        children="All Courses "
        my={`16`}
        textAlign={["center","left"]}

        
        />

        <TableContainer w={["100vw","full"]}>
          
         <Table variant={"simple"} size="lg">
          <TableCaption>
            All Available Courses in the Database 
          </TableCaption>

          <Thead>
            <Tr>

              <Th> ID</Th>
              <Th> Poster </Th>
              <Th> Title</Th>
              <Th> Category</Th>
              <Th>  Creator</Th>
              <Th isNumeric> Views</Th>
              <Th isNumeric> Lectures</Th>
              <Th isNumeric> Action</Th>
        

            </Tr>
          </Thead>
          <Tbody>
            {
              courses.map(item=>(
                <Row courseDetailsHandler={courseDetailsHandler} 
                deleteButtonHandler={deleteButtonHandler} key={item._id} item={item}
               
                />
              ))
            }
           </Tbody>
         </Table>
      </TableContainer>

      <CourseModal isOpen={isOpen} onClose={onClose}
      id={"kldmsakldnandad"}
      courseTitle="React course"
      
      deleteButtonHandler={deleteLectureButtonHandler}
      addLectureHandler={addLectureHandler}
      
      />
    </Box>

      <Sidebar/>
  
    </Grid>
  )
}




function Row({item,courseDetailsHandler ,deleteButtonHandler}){
  return(
    <Tr>

      <Td>#{item._id}</Td>
      <Td>

        <Image src={item.poster.url}/>
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={`uppercase`}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      
      
      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>courseDetailsHandler(item._id)} variant={"outline"} color={"purple.500"}> View Lectures</Button>
          <Button 
          
          onClick={()=>deleteButtonHandler(item._id)}
          color={"purple.600"}>
            <RiDeleteBin7Fill/>



          </Button>


        </HStack>

      </Td>
    </Tr>
  )
}

export default AdminCourses