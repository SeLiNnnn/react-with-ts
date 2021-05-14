import React from 'react';

export class ClassUseEffect extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      position: {
        x: 0,
        y: 0
      }
    };
  }

  changePosition = (evt: MouseEvent) => {
    this.setState({
      position: {
        x: evt.clientX,
        y: evt.clientY
      }
    });
  };

  componentDidMount() {
    console.log('did mount');
    document.addEventListener('mousemove', this.changePosition);
  }

  componentWillUnmount() {
    console.log('will un mount');
    document.removeEventListener('mousemove', this.changePosition);
  }


  render() {
    return (
      <section>
        Class Position X:{this.state.position.x} Y: {this.state.position.y}
      </section>
    );
  }
}

