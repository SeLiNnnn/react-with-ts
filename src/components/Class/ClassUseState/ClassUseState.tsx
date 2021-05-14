import React from 'react';

export class ClassUseState extends React.Component<any, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      like: 0
    };
  }

  render() {
    return (
      <section>
        <button onClick={() => {
          this.setState({like: this.state.like + 1});
        }}>已有 {this.state.like} 赞 👍🏻
        </button>
      </section>
    );
  }
}
