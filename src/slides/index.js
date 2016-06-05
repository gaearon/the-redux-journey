import React from 'react';
import Center from '../components/Center';
import Image from '../components/Image';

function makeProgression(props, title, items) {
  return [
    ...items.map((activeItem, activeIndex) =>
      <Center wide {...props}>
        <h3>{title}</h3>
        <ul>
          {items.map((item, i) =>
            <li
              key={i}
              style={{ opacity: i === activeIndex ? 1 : .5 }}
            >
              {item}
            </li>
          )}
        </ul>
      </Center>
    )
  ];
}

export default function getSlides() {
  return [
    <Center title='Use keyboard ← and → arrows to navigate.'>
      <Image width='70%' src={require('./logo.png')} />
    </Center>,
    <Center>
      <h2>Flux + Elm</h2>
    </Center>,
    <Center wide>
      <h1>🎂</h1>
    </Center>,
    <Center wide>
      <img src={require('./npm.png')} width='100%' />
    </Center>,
    <Center wide>
      <img src={require('./npm.png')} width='100%' style={{ opacity: .25 }} />
      <div style={{ position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, height: '100vh' }}>
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center' }}>
          <h1 style={{ alignSelf: 'center' }}>3 Million</h1>
        </div>
      </div>
    </Center>,
    <Center wide>
      <img src={require('./twitter.png')} width='100%' />
    </Center>,
    <Center>
      <h2>What Made Redux Successful?</h2>
    </Center>,
    <Center wide>
      <h1>Features and APIs?</h1>
    </Center>,
    <Center wide>
      <h2>A change emitter holding a value.</h2>
    </Center>,
    <Center wide code>
      <img src={require('./store.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./store2.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./store3.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./store4.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./store5.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./store6.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./store7.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./store8.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./store.png')} height='90%' />
    </Center>,
    <Center wide>
      <h1>Features & APIs?</h1>
    </Center>,
    <Center wide>
      <h1><s style={{ opacity: .5 }}>Features & APIs?</s></h1>
    </Center>,
    <Center>
      <Image width='100%' src={require('./escher.jpg')} />
    </Center>,
    <Center alt>
      <Image width='100%' src={require('./escher.jpg')} />
    </Center>,
    <Center alt>
      <h1>Constraints & Contracts</h1>
    </Center>,
    <Center alt>
      <h2>Redux Constraints</h2>
      <ul>
        <li>Single State Tree</li>
        <li>Actions Describe Updates</li>
        <li>Reducers Apply Updates</li>
      </ul>
    </Center>,
    ...makeProgression({ alt: true }, 'Debug Workflow', [
      'Log actions and states',
      'Find the bad state',
      'Check the action',
      'Fix the reducer',
      'Write a test'
    ]),
    ...makeProgression({ alt: true }, 'Everything Is Data', [
      'Persistence',
      'Universal rendering',
      'Recording user sessions',
      'Optimistic mutations',
      'Collaborative editing'
    ]),
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50vw',
        height: '100vh',
        color: '#181818',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>Features</h2>
      </div>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50vw',
        height: '100vh',
        color: '#f8f8f8',
        backgroundColor: '#181818' ,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>Constraints</h2>
      </div>
    </div>,
    <Center alt>
      <h2>Redux Contracts</h2>
      <ul>
        <li>Reducers</li>
        <li>Selectors</li>
        <li>Middleware</li>
        <li>Enhancers</li>
      </ul>
    </Center>,
    <Center alt>
      <h2>App Contracts</h2>
    </Center>,
    <Center alt wide>
      <h2>Reducers</h2>
      <p><code>(state, action) => state</code></p>
    </Center>,
    <Center wide code>
      <img src={require('./reducer.png')} width='100%' />
    </Center>,
    <Center alt wide>
      <h2>Selectors</h2>
      <p><code>(state, ...args) => derivation</code></p>
    </Center>,
    <Center wide code>
      <img src={require('./selector.png')} width='100%' />
    </Center>,
    <Center alt wide>
      <h2>Reducer + Selectors</h2>
    </Center>,
    <Center wide code>
      <img src={require('./bundle1.png')} width='80%' />
    </Center>,
    <Center wide code>
      <img src={require('./bundle2.png')} width='80%' />
    </Center>,
    <Center alt>
      <h2>Ecosystem Contracts</h2>
    </Center>,
    <Center alt wide>
      <h2>Higher Order Reducers</h2>
      <p><code>(reducer, ...args) => reducer</code></p>
    </Center>,
    <Center wide code>
      <img src={require('./hor.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./hor2.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./hor3.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./hor4.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./hor5.png')} height='90%' />
    </Center>,
    <Center wide code>
      <img src={require('./hor.png')} height='90%' />
    </Center>,
    <Center>
      <h2 style={{ lineHeight: 0 }}>♻️</h2>
      <h3 style={{ lineHeight: 1 }}><span style={{ opacity: .5 }}>omnidan/</span><br />redux-undo</h3>
    </Center>,
    <Center>
      <h2 style={{ lineHeight: 0 }}>😎</h2>
      <h3 style={{ lineHeight: 1 }}><span style={{ opacity: .5 }}>mattkrick/</span><br />redux-optimistic-ui</h3>
    </Center>,
    <Center>
      <h2 style={{ lineHeight: 0 }}>📝</h2>
      <h3 style={{ lineHeight: 1 }}><span style={{ opacity: .5 }}>davidkpiano/</span><br />react-redux-form</h3>
    </Center>,
    <Center alt wide>
      <h2>Middleware</h2>
      <p><code>store => next => action => any</code></p>
    </Center>,
    <Center wide code>
      <img src={require('./middleware.png')} width='100%' />
    </Center>,
    <Center wide code>
      <img src={require('./middleware2.png')} width='100%' />
    </Center>,
    <Center wide code>
      <img src={require('./middleware3.png')} width='100%' />
    </Center>,
    <Center wide code>
      <img src={require('./middleware4.png')} width='100%' />
    </Center>,
    <Center wide code>
      <img src={require('./middleware5.png')} width='100%' />
    </Center>,
    <Center wide code>
      <img src={require('./middleware6.png')} width='100%' />
    </Center>,
    <Center wide code>
      <img src={require('./middleware7.png')} width='100%' />
    </Center>,
    <Center wide code>
      <img src={require('./middleware8.png')} width='100%' />
    </Center>,
    <Center wide code>
      <img src={require('./middleware9.png')} width='100%' />
    </Center>,
    <Center wide code>
      <img src={require('./middleware.png')} width='100%' />
    </Center>,
    <Center>
      <h2 style={{ lineHeight: 0 }}>📰</h2>
      <h3 style={{ lineHeight: 1 }}><span style={{ opacity: .5 }}>theaqua/</span><br />redux-logger</h3>
    </Center>,
    <Center>
      <h2 style={{ lineHeight: 0 }}>🐥️</h2>
      <h3 style={{ lineHeight: 1 }}><span style={{ opacity: .5 }}>redux-observable/</span><br />redux-observable</h3>
    </Center>,
    <Center>
      <h2 style={{ lineHeight: 0 }}>🚀</h2>
      <h3 style={{ lineHeight: 1 }}><span style={{ opacity: .5 }}>apollostack/</span><br />apollo-client</h3>
    </Center>,
    <Center alt wide>
      <h2>Enhancers</h2>
      <p>
        <code>createStore => createStore</code>
      </p>
    </Center>,
    <Center wide>
      <h2 style={{ lineHeight: 0 }}>📦</h2>
      <h3 style={{ lineHeight: 1 }}><span style={{ opacity: .5 }}>tappleby/</span><br />redux-batched-subscribe</h3>
    </Center>,
    <Center wide>
      <h2 style={{ lineHeight: 0 }}>🌈</h2>
      <h3 style={{ lineHeight: 1 }}><span style={{ opacity: .5 }}>raisemarketplace/</span><br />redux-loop</h3>
    </Center>,
    <Center wide>
      <h2 style={{ lineHeight: 0 }}>🔮</h2>
      <h3 style={{ lineHeight: 1 }}><span style={{ opacity: .5 }}>zalmoxisus/</span><br />redux-devtools-extension</h3>
    </Center>,
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50vw',
        height: '100vh',
        color: '#181818',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>APIs</h2>
      </div>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50vw',
        height: '100vh',
        color: '#f8f8f8',
        backgroundColor: '#181818' ,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>Contracts</h2>
      </div>
    </div>,
    <Center>
      <h1>Lessons Learned</h1>
    </Center>,
    <Center>
      <h2>Design Holistically</h2>
    </Center>,
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      backgroundColor: '#f8f8f8'
    }}>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50vw',
        height: '50vh',
        color: '#181818',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>Features</h2>
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '50vw',
        height: '50vh',
        color: '#181818',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>APIs</h2>
      </div>
    </div>,
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '50vw',
        height: '50vh',
        color: '#181818',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>Features</h2>
      </div>
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        width: '50vw',
        height: '50vh',
        color: '#f8f8f8',
        backgroundColor: '#181818' ,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>Constraints</h2>
      </div>
      <div style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '50vw',
        height: '50vh',
        color: '#f8f8f8',
        backgroundColor: '#181818' ,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>Contracts</h2>
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '50vw',
        height: '50vh',
        color: '#181818',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2>APIs</h2>
      </div>
    </div>,
    <Center>
      <h2>Make Constraints Useful</h2>
    </Center>,
    <Center>
      <h2>Make Contracts Social</h2>
    </Center>,
    <Center>
      <h2>Design the Way Out</h2>
    </Center>,
    <Center code wide>
      <img src={require('./setstate2.png')} width='100%' />
    </Center>,
    <Center wide>
      <h2>Find the Stress Tests</h2>
    </Center>,
    <Center>
      <h2>Market Good Ideas</h2>
    </Center>,
    <Center wide>
      <h2>Understanding Matters</h2>
    </Center>,
    <Center>
      <h1>Hype!</h1>
    </Center>,
    <Center>
      <h2>Real Libraries</h2>
      <ul>
        <li><span style={{ opacity: .5 }}>facebook/</span>relay</li>
        <li><span style={{ opacity: .5 }}>reactivex/</span>rxjs</li>
        <li><span style={{ opacity: .5 }}>facebook/</span>react</li>
        <li><span style={{ opacity: .5 }}>mobxjs/</span>mobx</li>
        <li><span style={{ opacity: .5 }}>cerebral/</span>cerebral</li>
      </ul>
    </Center>,
    <Center>
      <img src={require('./tom.jpg')} style={{ transform: 'scale(1.2)' }} />
    </Center>,
    <Center wide>
      <img src={require('./community0.png')} width='100%' />
    </Center>,
    <Center wide>
      <h2>Immutable App<br />Architecture</h2>
      <h4 style={{ opacity: .5 }}>Lee Byron @ Render 2016</h4>
    </Center>,
    <Center wide>
      <h2>Cohesive Story</h2>
      <ul>
        <li>Declarative data fetching</li>
        <li>Built-in optimistic mutations</li>
        <li>Easy-to-test async control flow</li>
        <li>Combining local and server data</li>
        <li>Great developer experience</li>
      </ul>
    </Center>,
    <Center wide>
      <img src={require('./community.png')} width='100%' />
    </Center>,
    <Center wide>
      <img src={require('./next.png')} width='100%' />
    </Center>,
    <Center wide>
      <h1>💜</h1>
    </Center>,
    <Center wide>
      <h2>P.S.</h2>
    </Center>,
    <Center wide>
      <h1>
        <a
          href='http://egghead.io/redux-2'
          style={{
            textDecoration: 'none',
            color: '#181818'
          }}
          target='_blank'
        >
          egghead.io/<span style={{ color: '#6131AD' }}>redux-2</span>
        </a>
      </h1>
    </Center>
  ];
}
