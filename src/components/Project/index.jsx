
 import  './style.css';

function Project({props}) {
  return (
      <>
      <div className='project' style={{backgroundImage:`url("${props.localImage}")`}}>
         <span className='title-project'>{props.title} ({props.language}) </span>
      </div>
      </>
  );
}

export default Project;