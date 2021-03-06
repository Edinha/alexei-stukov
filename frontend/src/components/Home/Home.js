import React from 'react';
import request from 'axios';
import ProjectCard from '../Project/ProjectCard';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ModalContainer from '../Modal/ModalContainer';
import CreateProject from '../Project/CreateProject';

const API_URL = 'http://18.228.31.90/api';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      width: window.innerWidth,
      height: window.innerHeight,
      projects: []
    };
    props.changeMenu(false)
    this.onClick = this.onClick.bind(this)
    this.closeModalSave = this.closeModalSave.bind(this)
  }

  componentWillMount() {
    request.get(`${API_URL}/projects/`)
    .then(response => {
      this.setState({
        projects: response.data,
        modalOpen: false,
      });
    })
    .catch(e => {

    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateSize);
  }

  updateSize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  onClick() {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  closeModalSave() {
    this.componentWillMount()
  }

  render() {
    return (
      <div>
        <div id="project-container" className="flex-container inner-padding left-menu-padding">
        {this.state.projects.map(project =>
          <ProjectCard  key={project.id} className="w-sm"
                        projectId={project.id}
                        href={`/project/${project.id}`}
                        name={project.name}
                        description={project.description}
                        imageUrl={ project.image_url ? project.image_url : "https://cdn.blizzardwatch.com/wp-content/uploads/2016/12/Gingerdread-Header-120916.jpg"}
          />
        )}
          <div className="pinned-right">
            <Button variant="fab" color="secondary" aria-label="add" onClick={this.onClick}>
              <AddIcon />
            </Button>
          </div>

          <ModalContainer open={this.state.modalOpen} onClick={this.onClick} closeModalSave={this.closeModalSave}>
            <CreateProject />
          </ModalContainer>

        </div>
      </div>
    );
  }
}

export default Home;
