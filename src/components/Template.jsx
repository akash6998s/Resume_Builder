import React from 'react'

function Template({ data }) {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <img src={data.pic} alt="Your Name" className="profile-img" />
        <h1 className="mb-2">{data.name}</h1>
        <p style={{color: '#000'}} className="lead">{data.title}</p>
      </div>

      <div className="resume-section">
        <h2 className="section-title mb-4">Contact Information</h2>
        <ul className="list-unstyled">
          <li>Email: {data.email}</li>
          <li>Phone: {data.mobile}</li>
          <li>LinkedIn: <a href={data.linkedin} target="_blank">{data.linkedin}</a></li>
          <li>Website: <a href={data.website} target="_blank">{data.website}</a></li>
        </ul>
      </div>

      <div className="resume-section">
        <h2 className="section-title mb-4">Summary</h2>
        <p>{data.summary}</p>
      </div>

      <div className="resume-section">
        <h2 className="section-title mb-4">Education</h2>
        <div className="section-content">
          {data.education.map((item, index) => (
            <div key={index}>
              <h3>{item.degree}</h3>
              <p>{item.school}, Graduated {item.graduationYear}</p>
            </div>
          ))}
        </div>
      </div>  

      

      <div className="resume-section">
        <h2 className="section-title mb-4">Skills</h2>
        <div className="skills-list">
          {data.skills.map((item) => (
            <span className="badge badge-primary">{item}</span>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <h2 className="section-title mb-4">Projects</h2>
        <ul className="projects-list list-unstyled mb-0">
          {data.projects.map((item) => (
            <li>{item.name} - {item.description}</li>
          ))}

        </ul>
      </div>

      <div className="resume-section">
        <h2 className="section-title mb-4">Experience</h2>
        <div className="section-content">
          <h3>{data.jobTitle}</h3>
          <p>{data.companyName}, {data.startDate} - {data.endDate}</p>
          <ul className="list-unstyled">
            {data.jobDesc.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      

      {/* <div className="resume-section">
        <h2 className="section-title mb-4">Languages</h2>
        <ul className="languages-list list-unstyled mb-0">
          {data.languages.map((item) => (
            <li><span className="badge badge-secondary">{item.name}</span> - {item.proficiency}</li>
          ))}
        </ul>
      </div>

      <div className="resume-section">
        <h2 className="section-title mb-4">Awards & Certifications</h2>
        <ul className="list-unstyled mb-0">
          {data.awards.map((item) => (
            <li>{item.name}, {item.year}</li>
          ))}
        </ul>
      </div>

      <div className="resume-section text-center">
        <p className="mb-0">References available upon request.</p>
      </div> */}
    </div>
  )
}

export default Template