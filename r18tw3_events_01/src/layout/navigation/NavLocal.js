import React from 'react';
import NavContainer from './NavContainer';


const nav = [
  {
    "id": 1,
    "title": "Nav One 1",
    "url": "/nav-1",
    "n1child_one": [
      {
        "cid": 1,
        "title": "N1 Child One 1",
        "url": "n-1-child-1-1"
      },
      {
        "cid": 2,
        "title": "N1 Child One 2",
        "url": "n-1-child-1-2"
      },
      {
        "cid": 3,
        "title": "N1 Child One 3",
        "url": "n-1-child-1-3"
      },
      {
        "cid": 4,
        "title": "N1 Child One 4",
        "url": "n-1-child-1-4"
      },
      {
        "cid": 5,
        "title": "N1 Child One 5",
        "url": "n-1-child-1-5"
      }
    ],
    "n1child_two": [
      {
        "cid": 1,
        "title": "N1 Child Two 1",
        "url": "n-1-child-2-1"
      },
      {
        "cid": 2,
        "title": "N1 Child Two 2",
        "url": "n-1-child-2-2"
      },
      {
        "cid": 3,
        "title": "N1 Child Two 3",
        "url": "n-1-child-2-3"
      },
      {
        "cid": 4,
        "title": "N1 Child Two 4",
        "url": "n-1-child-2-4"
      },
      {
        "cid": 5,
        "title": "N1 Child Two 5",
        "url": "n-1-child-2-5"
      },
      {
        "cid": 6,
        "title": "N1 Child Two 6",
        "url": "n-1-child-2-6"
      },
      {
        "cid": 7,
        "title": "N1 Child Two 7",
        "url": "n-1-child-2-7"
      },
      {
        "cid": 8,
        "title": "N1 Child Two 8",
        "url": "n-1-child-2-8"
      }

    ],
    "n1child_three": [
      {
        "cid": 1,
        "title": "N1 Child Three 1",
        "url": "n-1-child-3-1"
      },
      {
        "cid": 2,
        "title": "N1 Child Three 2",
        "url": "n-1-child-3-2"
      },
      {
        "cid": 3,
        "title": "N1 Child Three 3",
        "url": "n-1-child-3-3"
      },
      {
        "cid": 4,
        "title": "N1 Child Three 4",
        "url": "n-1-child-3-4"
      },
      {
        "cid": 5,
        "title": "N1 Child Three 5",
        "url": "n-1-child-3-5"
      }
    ],
  },
  {
    "id": 1,
    "title": "Nav Two 2",
    "url": "/nav-2",
    "n2child_one": [
      {
        "cid": 1,
        "title": "N2 Child One 1",
        "url": "n-2-child-1-1"
      },
      {
        "cid": 2,
        "title": "N2 Child One 2",
        "url": "n-2-child-1-2"
      },
      {
        "cid": 3,
        "title": "N2 Child One 3",
        "url": "n-2-child-1-3"
      },
      {
        "cid": 4,
        "title": "N2 Child One 4",
        "url": "n-2-child-1-4"
      },
      {
        "cid": 5,
        "title": "N2 Child One 5",
        "url": "n-2-child-1-5"
      }
    ],
    "n2child_two": [
      {
        "cid": 1,
        "title": "N2 Child Two 1",
        "url": "n-2-child-2-1"
      },
      {
        "cid": 2,
        "title": "N2 Child Two 2",
        "url": "n-2-child-2-2"
      },
      {
        "cid": 3,
        "title": "N2 Child Two 3",
        "url": "n-2-child-2-3"
      },
      {
        "cid": 4,
        "title": "N2 Child Two 4",
        "url": "n-2-child-2-4"
      },
      {
        "cid": 5,
        "title": "N2 Child Two 5",
        "url": "n-2-child-2-5"
      },
      {
        "cid": 6,
        "title": "N2 Child Two 6",
        "url": "n-2-child-2-6"
      },
      {
        "cid": 7,
        "title": "N2 Child Two 7",
        "url": "n-2-child-2-7"
      },
      {
        "cid": 8,
        "title": "N2 Child Two 8",
        "url": "n-2-child-2-8"
      }
    ]
  },
  {
    "id": 1,
    "title": "Nav Three 3",
    "url": "/nav-3", 
    "n3child": [
      {
        "id": 1,
        "title": "News",
        "url": "/news"
      },
      {
        "id": 2,
        "title": "Event Calendar",
        "url": "/calendar"
      }
    ]
  },
  {
    "id": 1,
    "title": "Nav Four 4",
    "url": "/nav-4", 
    "vidio": [
      {
        "id": 1,
        "title": "Latest Video",
        "url": '/latest-video'
      },
      {
        "id": 2,
        "title": "Most Viewed",
        "url": '/viewed'
      }
    ],
    "audio": [
      {
        "id": 1,
        "title": "Latest Audio",
        "url": '/latest-audio'
      },
      {
        "id": 2,
        "title": "Most Listen",
        "url": '/listen'
      }
    ]
  },
  {
    "id": 1,
    "title": "Nav Five 5",
    "url": "/nav-5" 
  },
]

function NavLocal() {
  return (
    <div>
      <NavContainer nav={nav} />
    </div>
  )
}

export default NavLocal