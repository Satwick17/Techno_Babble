import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Particle = () => {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
  return (
    <div>
      <Particles
      id="tsparticles"
      init={particlesInit}

      options={ {name: "Parallax",
      "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: {
                min: 0.1,
                max: 0.5,
            },
            animation: {
                enable: true,
                speed: 3,
                sync: false,
            },
        },
        size: {
            value: {
                min: 1,
                max: 10,
            },
            animation: {
                enable: true,
                speed: 20,
                sync: false,
            },
        },
        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                    enable: true,
                    smooth: 10,
                    force: 60,
                },
            },
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 4,
            },
            remove: {
                quantity: 2,
            },
        },
    },
    background: {
        color: "black",
    },}}
    />
    </div>
  )
}

export default Particle
