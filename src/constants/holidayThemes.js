// Holiday theme definitions for dynamic gameplay

export const HOLIDAY_THEMES = {
  halloween: {
    name: 'Halloween',
    emoji: '🎃',
    description: 'Catch the candy!',
    background: 'linear-gradient(to bottom, #1a0033 0%, #330066 100%)',
    accentColor: '#ff6b00',
    decorations: {
      items: ['👻', '🦇', '👻', '🦇', '👻', '🦇', '🕷️', '🕸️'],
      className: 'halloween',
    },
    catchable: [
      { emoji: '🍭', name: 'Lollipop', points: 15, speed: 1.2 },
      { emoji: '🍬', name: 'Candy', points: 10, speed: 1 },
      { emoji: '🍫', name: 'Chocolate', points: 12, speed: 1.1 },
      { emoji: '🍩', name: 'Donut', points: 20, speed: 0.9 },
      { emoji: '🍪', name: 'Cookie', points: 10, speed: 1.3 },
      { emoji: '🎃', name: 'Pumpkin', points: 25, speed: 0.8 }
    ],
    avoidable: [
      { emoji: '🥦', name: 'Broccoli', speed: 1 },
      { emoji: '🥕', name: 'Carrot', speed: 1.1 },
      { emoji: '🍎', name: 'Apple', speed: 1.2 },
      { emoji: '🥗', name: 'Salad', speed: 0.9 }
    ],
    durationRange: [15000, 30000] // 15-30 seconds
  },
  thanksgiving: {
    name: 'Thanksgiving',
    emoji: '🦃',
    description: 'Catch Thanksgiving treats!',
    background: 'linear-gradient(to bottom, #8B4513 0%, #D2691E 100%)',
    accentColor: '#ff8c00',
    decorations: {
      items: ['🍂', '🍁', '🍂', '🍁', '🍂', '🍁', '🌾', '🍂'],
      className: 'thanksgiving',
    },
    catchable: [
      { emoji: '🦃', name: 'Turkey', points: 25, speed: 0.8 },
      { emoji: '🥧', name: 'Pie', points: 20, speed: 0.9 },
      { emoji: '🌽', name: 'Corn', points: 12, speed: 1.1 },
      { emoji: '🍠', name: 'Sweet Potato', points: 15, speed: 1 },
      { emoji: '🥖', name: 'Bread', points: 10, speed: 1.2 },
      { emoji: '🍂', name: 'Autumn Leaf', points: 8, speed: 1.3 }
    ],
    avoidable: [
      { emoji: '🍕', name: 'Pizza', speed: 1 },
      { emoji: '🍔', name: 'Burger', speed: 1.1 },
      { emoji: '🌭', name: 'Hot Dog', speed: 1.2 },
      { emoji: '🍟', name: 'Fries', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  christmas: {
    name: 'Christmas',
    emoji: '🎄',
    description: 'Catch Christmas joy!',
    background: 'linear-gradient(to bottom, #004d1a 0%, #00b33c 100%)',
    accentColor: '#ff0000',
    decorations: {
      items: ['❄️', '⛄', '❄️', '🎄', '❄️', '⛄', '❄️', '🎄'],
      className: 'christmas',
    },
    catchable: [
      { emoji: '🎅', name: 'Santa', points: 30, speed: 0.7 },
      { emoji: '🎁', name: 'Present', points: 20, speed: 0.9 },
      { emoji: '🎄', name: 'Tree', points: 15, speed: 1 },
      { emoji: '⛄', name: 'Snowman', points: 18, speed: 1.1 },
      { emoji: '🔔', name: 'Bell', points: 12, speed: 1.2 },
      { emoji: '🎀', name: 'Bow', points: 10, speed: 1.3 }
    ],
    avoidable: [
      { emoji: '💣', name: 'Bomb', speed: 1.2 },
      { emoji: '⚡', name: 'Lightning', speed: 1.3 },
      { emoji: '🔥', name: 'Fire', speed: 1.1 },
      { emoji: '💀', name: 'Skull', speed: 1 }
    ],
    durationRange: [15000, 30000]
  },
  easter: {
    name: 'Easter',
    emoji: '🐰',
    description: 'Catch Easter surprises!',
    background: 'linear-gradient(to bottom, #ffb3e6 0%, #ff99cc 100%)',
    accentColor: '#ff66b2',
    decorations: {
      items: ['🦋', '🌸', '🦋', '🌷', '🦋', '🌸', '🐣', '🌷'],
      className: 'easter',
    },
    catchable: [
      { emoji: '🥚', name: 'Egg', points: 15, speed: 1 },
      { emoji: '🐰', name: 'Bunny', points: 25, speed: 0.8 },
      { emoji: '🐣', name: 'Chick', points: 18, speed: 1.1 },
      { emoji: '🌷', name: 'Tulip', points: 12, speed: 1.2 },
      { emoji: '🌸', name: 'Blossom', points: 10, speed: 1.3 },
      { emoji: '🧺', name: 'Basket', points: 20, speed: 0.9 }
    ],
    avoidable: [
      { emoji: '🐍', name: 'Snake', speed: 1.2 },
      { emoji: '🦂', name: 'Scorpion', speed: 1.3 },
      { emoji: '🕷️', name: 'Spider', speed: 1.1 },
      { emoji: '🐀', name: 'Rat', speed: 1 }
    ],
    durationRange: [15000, 30000]
  },
  birthday: {
    name: 'Birthday',
    emoji: '🎂',
    description: 'Catch party treats!',
    background: 'linear-gradient(to bottom, #ff1493 0%, #ff69b4 100%)',
    accentColor: '#ff1493',
    decorations: {
      items: ['🎈', '🎉', '🎈', '🎉', '🎈', '🎁', '🎊', '🎂'],
      className: 'birthday',
    },
    catchable: [
      { emoji: '🎂', name: 'Cake', points: 25, speed: 0.8 },
      { emoji: '🎁', name: 'Gift', points: 20, speed: 0.9 },
      { emoji: '🎈', name: 'Balloon', points: 10, speed: 1.3 },
      { emoji: '🎉', name: 'Confetti', points: 15, speed: 1.1 },
      { emoji: '🧁', name: 'Cupcake', points: 18, speed: 1 },
      { emoji: '🍰', name: 'Cake Slice', points: 12, speed: 1.2 }
    ],
    avoidable: [
      { emoji: '😢', name: 'Tears', speed: 1 },
      { emoji: '💔', name: 'Broken Heart', speed: 1.1 },
      { emoji: '🌧️', name: 'Rain', speed: 1.2 },
      { emoji: '😴', name: 'Bored', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  valentines: {
    name: "Valentine's Day",
    emoji: '💝',
    description: 'Catch the love!',
    background: 'linear-gradient(to bottom, #ff0066 0%, #ff6699 100%)',
    accentColor: '#ff0066',
    decorations: {
      items: ['💝', '💖', '💝', '💕', '🌹', '💐', '💖', '💕'],
      className: 'valentines',
    },
    catchable: [
      { emoji: '💝', name: 'Gift Heart', points: 25, speed: 0.8 },
      { emoji: '💖', name: 'Sparkling Heart', points: 20, speed: 0.9 },
      { emoji: '🌹', name: 'Rose', points: 18, speed: 1 },
      { emoji: '💐', name: 'Bouquet', points: 22, speed: 0.85 },
      { emoji: '🍫', name: 'Chocolate', points: 15, speed: 1.1 },
      { emoji: '💕', name: 'Two Hearts', points: 12, speed: 1.2 }
    ],
    avoidable: [
      { emoji: '💔', name: 'Broken Heart', speed: 1 },
      { emoji: '😭', name: 'Crying', speed: 1.1 },
      { emoji: '🥀', name: 'Wilted Rose', speed: 1.2 },
      { emoji: '❌', name: 'X', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  july4th: {
    name: '4th of July',
    emoji: '🎆',
    description: 'Catch freedom!',
    background: 'linear-gradient(to bottom, #002868 0%, #bf0a30 100%)',
    accentColor: '#ffffff',
    decorations: {
      items: ['🎆', '🎇', '⭐', '🎆', '🎇', '⭐', '🎆', '🇺🇸'],
      className: 'july4th',
    },
    catchable: [
      { emoji: '🎆', name: 'Fireworks', points: 25, speed: 0.8 },
      { emoji: '🗽', name: 'Liberty', points: 30, speed: 0.7 },
      { emoji: '🇺🇸', name: 'Flag', points: 20, speed: 0.9 },
      { emoji: '🎇', name: 'Sparkler', points: 15, speed: 1.1 },
      { emoji: '⭐', name: 'Star', points: 12, speed: 1.2 },
      { emoji: '🦅', name: 'Eagle', points: 22, speed: 0.85 }
    ],
    avoidable: [
      { emoji: '💥', name: 'Explosion', speed: 1.2 },
      { emoji: '🔥', name: 'Fire', speed: 1.1 },
      { emoji: '☠️', name: 'Danger', speed: 1.3 },
      { emoji: '🚫', name: 'Prohibited', speed: 1 }
    ],
    durationRange: [15000, 30000]
  },
  stpatricks: {
    name: "St. Patrick's Day",
    emoji: '🍀',
    description: 'Catch the luck!',
    background: 'linear-gradient(to bottom, #006400 0%, #32cd32 100%)',
    accentColor: '#00ff00',
    decorations: {
      items: ['🍀', '☘️', '🍀', '🌈', '☘️', '🍀', '🌈', '🪙'],
      className: 'stpatricks',
    },
    catchable: [
      { emoji: '🍀', name: 'Clover', points: 25, speed: 0.8 },
      { emoji: '🌈', name: 'Rainbow', points: 30, speed: 0.7 },
      { emoji: '💚', name: 'Green Heart', points: 18, speed: 1 },
      { emoji: '🎩', name: 'Top Hat', points: 20, speed: 0.9 },
      { emoji: '🪙', name: 'Gold Coin', points: 22, speed: 0.85 },
      { emoji: '☘️', name: 'Shamrock', points: 15, speed: 1.1 }
    ],
    avoidable: [
      { emoji: '🐍', name: 'Snake', speed: 1.2 },
      { emoji: '💀', name: 'Bad Luck', speed: 1 },
      { emoji: '🕷️', name: 'Spider', speed: 1.1 },
      { emoji: '🦂', name: 'Scorpion', speed: 1.3 }
    ],
    durationRange: [15000, 30000]
  },
  mothersday: {
    name: "Mother's Day",
    emoji: '👩',
    description: 'Celebrate Mom!',
    background: 'linear-gradient(to bottom, #ffb6c1 0%, #ffc0cb 100%)',
    accentColor: '#ff69b4',
    decorations: {
      items: ['💐', '🌹', '💝', '💖', '🌺', '🌹', '💐', '🎀'],
      className: 'mothersday',
    },
    catchable: [
      { emoji: '💐', name: 'Bouquet', points: 25, speed: 0.8 },
      { emoji: '🌹', name: 'Rose', points: 20, speed: 0.9 },
      { emoji: '💝', name: 'Gift', points: 22, speed: 0.85 },
      { emoji: '💖', name: 'Love', points: 18, speed: 1 },
      { emoji: '🌺', name: 'Hibiscus', points: 15, speed: 1.1 },
      { emoji: '🎀', name: 'Ribbon', points: 12, speed: 1.2 }
    ],
    avoidable: [
      { emoji: '🥀', name: 'Wilted Flower', speed: 1 },
      { emoji: '💔', name: 'Broken Heart', speed: 1.1 },
      { emoji: '😢', name: 'Sad', speed: 1.2 },
      { emoji: '🚫', name: 'Forbidden', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  fathersday: {
    name: "Father's Day",
    emoji: '👨',
    description: 'Celebrate Dad!',
    background: 'linear-gradient(to bottom, #4169e1 0%, #1e90ff 100%)',
    accentColor: '#0000ff',
    decorations: {
      items: ['👔', '🎁', '🏆', '⚾', '👔', '🎁', '🏆', '⛳'],
      className: 'fathersday',
    },
    catchable: [
      { emoji: '🎁', name: 'Gift', points: 25, speed: 0.8 },
      { emoji: '👔', name: 'Tie', points: 20, speed: 0.9 },
      { emoji: '⚾', name: 'Baseball', points: 18, speed: 1 },
      { emoji: '🏆', name: 'Trophy', points: 22, speed: 0.85 },
      { emoji: '🎣', name: 'Fishing', points: 15, speed: 1.1 },
      { emoji: '⛳', name: 'Golf', points: 12, speed: 1.2 }
    ],
    avoidable: [
      { emoji: '💔', name: 'Broken Heart', speed: 1 },
      { emoji: '😢', name: 'Sad', speed: 1.1 },
      { emoji: '🚫', name: 'Forbidden', speed: 1.2 },
      { emoji: '👩', name: 'Woman', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  newyearseve: {
    name: "New Year's Eve",
    emoji: '🎊',
    description: 'Ring in the new year!',
    background: 'linear-gradient(to bottom, #000080 0%, #4b0082 100%)',
    accentColor: '#ffd700',
    decorations: {
      items: ['🎊', '🎉', '✨', '🎆', '🎊', '🎉', '✨', '🍾'],
      className: 'newyearseve',
    },
    catchable: [
      { emoji: '🎊', name: 'Party Popper', points: 25, speed: 0.8 },
      { emoji: '🎉', name: 'Confetti', points: 20, speed: 0.9 },
      { emoji: '🍾', name: 'Champagne', points: 22, speed: 0.85 },
      { emoji: '✨', name: 'Sparkles', points: 15, speed: 1.1 },
      { emoji: '🎆', name: 'Fireworks', points: 18, speed: 1 },
      { emoji: '🥳', name: 'Party Face', points: 12, speed: 1.2 }
    ],
    avoidable: [
      { emoji: '😴', name: 'Sleep', speed: 1 },
      { emoji: '💤', name: 'Zzz', speed: 1.1 },
      { emoji: '🌧️', name: 'Rain', speed: 1.2 },
      { emoji: '😢', name: 'Tears', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  movie: {
    name: 'Movie Mode',
    emoji: '🎬',
    description: 'Lights, camera, action!',
    background: 'linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%)',
    accentColor: '#e94560',
    decorations: {
      items: ['🍿', '🎬', '🎥', '🎞️', '🍿', '🎬', '🎭', '🏆'],
      className: 'movie',
    },
    catchable: [
      { emoji: '🍿', name: 'Popcorn', points: 20, speed: 0.9 },
      { emoji: '🎬', name: 'Clapperboard', points: 25, speed: 0.8 },
      { emoji: '🎥', name: 'Camera', points: 22, speed: 0.85 },
      { emoji: '🎞️', name: 'Film', points: 18, speed: 1 },
      { emoji: '🎭', name: 'Theater Masks', points: 15, speed: 1.1 },
      { emoji: '🏆', name: 'Award', points: 30, speed: 0.7 }
    ],
    avoidable: [
      { emoji: '🤿', name: 'Scuba Diver', speed: 1 },
      { emoji: '😴', name: 'Boring', speed: 1.1 },
      { emoji: '📱', name: 'Phone', speed: 1.2 },
      { emoji: '🔇', name: 'No Sound', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  sport: {
    name: 'Sport Mode',
    emoji: '⚽',
    description: 'Get in the game!',
    background: 'linear-gradient(to bottom, #2d6a4f 0%, #52b788 100%)',
    accentColor: '#ffffff',
    decorations: {
      items: ['⚽', '🏀', '⚾', '🏆', '⚽', '🏀', '🥇', '⛳'],
      className: 'sport',
    },
    catchable: [
      { emoji: '⚽', name: 'Soccer Ball', points: 20, speed: 0.9 },
      { emoji: '🏀', name: 'Basketball', points: 20, speed: 0.9 },
      { emoji: '⚾', name: 'Baseball', points: 18, speed: 1 },
      { emoji: '🏆', name: 'Trophy', points: 30, speed: 0.7 },
      { emoji: '🥇', name: 'Gold Medal', points: 25, speed: 0.8 },
      { emoji: '⛳', name: 'Golf', points: 15, speed: 1.1 }
    ],
    avoidable: [
      { emoji: '🩹', name: 'Injury', speed: 1 },
      { emoji: '🚫', name: 'Foul', speed: 1.1 },
      { emoji: '🟥', name: 'Red Card', speed: 1.2 },
      { emoji: '😫', name: 'Exhausted', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  school: {
    name: 'First Day of School',
    emoji: '🎒',
    description: 'Time to learn!',
    background: 'linear-gradient(to bottom, #ffd60a 0%, #ffc300 100%)',
    accentColor: '#003566',
    decorations: {
      items: ['📚', '✏️', '📝', '🎒', '📚', '✏️', '⭐', '🖍️'],
      className: 'school',
    },
    catchable: [
      { emoji: '📚', name: 'Books', points: 20, speed: 0.9 },
      { emoji: '✏️', name: 'Pencil', points: 15, speed: 1.1 },
      { emoji: '🎒', name: 'Backpack', points: 25, speed: 0.8 },
      { emoji: '📝', name: 'Notes', points: 18, speed: 1 },
      { emoji: '🖍️', name: 'Crayons', points: 12, speed: 1.2 },
      { emoji: '⭐', name: 'Gold Star', points: 30, speed: 0.7 }
    ],
    avoidable: [
      { emoji: '❌', name: 'Wrong Answer', speed: 1 },
      { emoji: '😴', name: 'Sleepy', speed: 1.1 },
      { emoji: '📵', name: 'No Phones', speed: 1.2 },
      { emoji: '😰', name: 'Test Anxiety', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  space: {
    name: 'Outerspace Mode',
    emoji: '🚀',
    description: 'Explore the cosmos!',
    background: 'linear-gradient(to bottom, #0d1b2a 0%, #1b263b 100%)',
    accentColor: '#e0e1dd',
    decorations: {
      items: ['🚀', '🌟', '🪐', '🌙', '🚀', '🌟', '👨‍🚀', '🛸'],
      className: 'space',
    },
    catchable: [
      { emoji: '🚀', name: 'Rocket', points: 25, speed: 0.8 },
      { emoji: '🌟', name: 'Star', points: 18, speed: 1 },
      { emoji: '🪐', name: 'Saturn', points: 22, speed: 0.85 },
      { emoji: '🌙', name: 'Moon', points: 20, speed: 0.9 },
      { emoji: '👨‍🚀', name: 'Astronaut', points: 30, speed: 0.7 },
      { emoji: '🛸', name: 'UFO', points: 28, speed: 0.75 }
    ],
    avoidable: [
      { emoji: '☄️', name: 'Comet', speed: 1.3 },
      { emoji: '💥', name: 'Explosion', speed: 1.2 },
      { emoji: '🕳️', name: 'Black Hole', speed: 1 },
      { emoji: '👾', name: 'Alien', speed: 1.1 }
    ],
    durationRange: [15000, 30000]
  },
  animal: {
    name: 'Animal Mode',
    emoji: '🦁',
    description: 'Visit the zoo!',
    background: 'linear-gradient(to bottom, #588157 0%, #a7c957 100%)',
    accentColor: '#bc6c25',
    decorations: {
      items: ['🦁', '🦋', '🐼', '🐨', '🦁', '🦋', '🐬', '🦒'],
      className: 'animal',
    },
    catchable: [
      { emoji: '🦁', name: 'Lion', points: 25, speed: 0.8 },
      { emoji: '🐼', name: 'Panda', points: 28, speed: 0.75 },
      { emoji: '🐨', name: 'Koala', points: 22, speed: 0.85 },
      { emoji: '🦋', name: 'Butterfly', points: 15, speed: 1.1 },
      { emoji: '🐬', name: 'Dolphin', points: 20, speed: 0.9 },
      { emoji: '🦒', name: 'Giraffe', points: 18, speed: 1 }
    ],
    avoidable: [
      { emoji: '🦂', name: 'Scorpion', speed: 1.2 },
      { emoji: '🐍', name: 'Snake', speed: 1.1 },
      { emoji: '🦈', name: 'Shark', speed: 1.3 },
      { emoji: '🕷️', name: 'Spider', speed: 1 }
    ],
    durationRange: [15000, 30000]
  },
  music: {
    name: 'Music Mode',
    emoji: '🎵',
    description: 'Feel the rhythm!',
    background: 'linear-gradient(to bottom, #7209b7 0%, #b5179e 100%)',
    accentColor: '#f72585',
    decorations: {
      items: ['🎵', '🎸', '🎹', '🎤', '🎵', '🎸', '🎺', '🥁'],
      className: 'music',
    },
    catchable: [
      { emoji: '🎵', name: 'Music Notes', points: 15, speed: 1.1 },
      { emoji: '🎸', name: 'Guitar', points: 22, speed: 0.85 },
      { emoji: '🎹', name: 'Piano', points: 25, speed: 0.8 },
      { emoji: '🎤', name: 'Microphone', points: 20, speed: 0.9 },
      { emoji: '🎺', name: 'Trumpet', points: 18, speed: 1 },
      { emoji: '🥁', name: 'Drums', points: 20, speed: 0.9 }
    ],
    avoidable: [
      { emoji: '🔇', name: 'Mute', speed: 1 },
      { emoji: '😵', name: 'Off Key', speed: 1.1 },
      { emoji: '📵', name: 'Silence', speed: 1.2 },
      { emoji: '💔', name: 'Broken String', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  art: {
    name: 'Art Mode',
    emoji: '🎨',
    description: 'Create masterpieces!',
    background: 'linear-gradient(to bottom, #d62828 0%, #f77f00 100%)',
    accentColor: '#fcbf49',
    decorations: {
      items: ['🎨', '🖌️', '🖍️', '✏️', '🎨', '🖌️', '🌈', '🖼️'],
      className: 'art',
    },
    catchable: [
      { emoji: '🎨', name: 'Palette', points: 25, speed: 0.8 },
      { emoji: '🖌️', name: 'Paintbrush', points: 20, speed: 0.9 },
      { emoji: '🖍️', name: 'Crayon', points: 15, speed: 1.1 },
      { emoji: '✏️', name: 'Pencil', points: 18, speed: 1 },
      { emoji: '🌈', name: 'Rainbow', points: 30, speed: 0.7 },
      { emoji: '🖼️', name: 'Frame', points: 22, speed: 0.85 }
    ],
    avoidable: [
      { emoji: '💧', name: 'Spill', speed: 1.2 },
      { emoji: '❌', name: 'Mistake', speed: 1 },
      { emoji: '😢', name: 'Smudge', speed: 1.1 },
      { emoji: '🚫', name: 'Blocked', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  plant: {
    name: 'Plant Mode',
    emoji: '🌱',
    description: 'Grow your garden!',
    background: 'linear-gradient(to bottom, #2d6a4f 0%, #40916c 100%)',
    accentColor: '#b7e4c7',
    decorations: {
      items: ['🌱', '🌻', '🌹', '🌷', '🌺', '🌻', '🌹', '🌳'],
      className: 'plant',
    },
    catchable: [
      { emoji: '🌱', name: 'Seedling', points: 15, speed: 1.1 },
      { emoji: '🌻', name: 'Sunflower', points: 22, speed: 0.85 },
      { emoji: '🌹', name: 'Rose', points: 25, speed: 0.8 },
      { emoji: '🌷', name: 'Tulip', points: 20, speed: 0.9 },
      { emoji: '🌺', name: 'Hibiscus', points: 18, speed: 1 },
      { emoji: '🌳', name: 'Tree', points: 30, speed: 0.7 }
    ],
    avoidable: [
      { emoji: '🥀', name: 'Wilted', speed: 1 },
      { emoji: '🐛', name: 'Bug', speed: 1.2 },
      { emoji: '🌵', name: 'Cactus', speed: 1.1 },
      { emoji: '☠️', name: 'Poison', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  },
  ballet: {
    name: 'Ballet Mode',
    emoji: '🩰',
    description: 'Dance with grace!',
    background: 'linear-gradient(to bottom, #f0abfc 0%, #e879f9 100%)',
    accentColor: '#fae8ff',
    decorations: {
      items: ['🩰', '👗', '👑', '🌹', '🩰', '🎀', '✨', '👗'],
      className: 'ballet',
    },
    catchable: [
      { emoji: '🩰', name: 'Ballet Shoes', points: 25, speed: 0.8 },
      { emoji: '👗', name: 'Tutu', points: 22, speed: 0.85 },
      { emoji: '👑', name: 'Tiara', points: 30, speed: 0.7 },
      { emoji: '🌹', name: 'Rose Bouquet', points: 20, speed: 0.9 },
      { emoji: '🎀', name: 'Ribbon', points: 15, speed: 1.1 },
      { emoji: '✨', name: 'Sparkle', points: 18, speed: 1 }
    ],
    avoidable: [
      { emoji: '🥾', name: 'Heavy Boot', speed: 1 },
      { emoji: '💧', name: 'Wet Floor', speed: 1.2 },
      { emoji: '🪨', name: 'Rock', speed: 1.1 },
      { emoji: '😵', name: 'Dizzy', speed: 0.9 }
    ],
    durationRange: [15000, 30000]
  }
};

export const THEME_ORDER = [
  'halloween',
  'thanksgiving',
  'christmas',
  'easter',
  'birthday',
  'valentines',
  'july4th',
  'stpatricks',
  'mothersday',
  'fathersday',
  'newyearseve',
  'movie',
  'sport',
  'school',
  'space',
  'animal',
  'music',
  'art',
  'plant',
  'ballet'
];
