import React from 'react';
import { NavBar, Card, Graph } from 'rippleui';

function Home() {
  return (
    <div>
      <NavBar>
        <NavBar.Item>Home</NavBar.Item>
        <NavBar.Item>Profile</NavBar.Item>
      </NavBar>

      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
        <Card title="User Statistics" content="Some recent statistics" />
        <Card title="Recent Activity" content="Activity logs here" />
      </div>

      <Graph
        data={[
          { name: 'Activity A', value: 400 },
          { name: 'Activity B', value: 300 },
        ]}
        type="pie"
      />
    </div>
  );
}

export default Home;
