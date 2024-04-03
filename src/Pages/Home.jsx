import React from 'react'
import {Link} from 'react-router-dom'
import programmer from '../assets/programmer.jpg'
import ProjectCard from '../Components/ProjectCard'
function Home() {
  return (
    <div>
        <div className='row'>
            <div className='col-6'>
                <h1 className='text-center mt-5'>Project Fair</h1>

                <p style={{textAlign:'justify'}} className='mx-5'>Project management is the practice of using knowledge, skills, tools, and techniques to complete a series of tasks to deliver value and achieve a desired outcome. A project is a series of structured tasks, activities, and deliverables that are carefully executed to achieve a desired outcome. They are temporary efforts to create value through unique products, services and processes. Each aspect of a project must go through the phases of the project lifecycle before reaching an end goal. This lifecycle allows project managers to execute each phase of their project effectively. It enables them to plan each task and activity meticulously, ensuring the highest chances of a project’s success.</p>

                <div className='text-center'>
                    <Link to={'/login'}>
                    <button className='btn btn-dark mt-2 mb-5'>Get Started</button>
                    </Link>

                </div>

            </div>
          <div className='col-sm-6'>
            <img src={programmer} width={'90%'} alt="" />

          </div>

        </div>
        <div className='row'>
            <div className='col-12' style={{height:'500px'}}>

                <h1 className='text-center m-5'>Explore Our Projects</h1>
                <marquee width='100%' direction="left" height="400px">
                    <div>
                        <ProjectCard/>
                    </div>
                </marquee>
            </div>
        </div>
        <div className='row mx-5 mb-5'>
            <h1 className='text-center m-5'>Our  Services</h1>
            <div  className='col-md-4'>
                <div className='card  shadow p-5' style={{height:'550px'}}>
                    <h3 className='text-center m-2'>Web Designing</h3>
                    <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eius, iusto quo, quis ipsum accusamus aliquam ipsa doloremque asperiores nostrum in temporibus dolor facere minima perferendis sint placeat earum nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem hic incidunt, magnam aspernatur deserunt consequatur nihil earum doloremque exercitationem? Repellendus voluptatum sapiente similique, praesentium eos adipisci recusandae dolorem aspernatur veniam?</p>
                </div>
        </div>

        <div className='col-md-4'>
      <div className='card shadow p-5'style={{height:'550px'}}>
      <h3 className='text-center m-2'>Single Page Application</h3>
      <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eius, iusto quo, quis ipsum accusamus aliquam ipsa doloremque asperiores nostrum in temporibus dolor facere minima perferendis sint placeat earum nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem hic incidunt, magnam aspernatur deserunt consequatur nihil earum doloremque exercitationem? Repellendus voluptatum sapiente similique, praesentium eos adipisci recusandae dolorem aspernatur veniam?</p>
     </div>
 </div>

 <div className='col-md-4'>
    <div  className='card shadow p-5'style={{height:'550px'}}>

     <h3 className='text-center m-2'>Back-end Services</h3>
      <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eius, iusto quo, quis ipsum accusamus aliquam ipsa doloremque asperiores nostrum in temporibus dolor facere minima perferendis sint placeat earum nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem hic incidunt, magnam aspernatur deserunt consequatur nihil earum doloremque exercitationem? Repellendus voluptatum sapiente similique, praesentium eos adipisci recusandae dolorem aspernatur veniam?</p>
    </div>

 </div>

        </div>
    </div>
  )
}

export default Home