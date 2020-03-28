export {};

let name = 'kaito';

name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
  name: 'kaito',
  height: 173
} as const;

// profile.name = 'Ham';
// profile.height = 180;