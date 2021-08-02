/** @format */
/*imports  */

export const switches = [
  {
    type: "Linear",
    description:
      "Are the simplest ones. They feel the same from the moment you start pressing the key until bottoming out. There is no tactile feedback or noise when hitting the actuation point (the point where the keypress gets registered – usually somewhere in the middle). So, most of the time, you will probably bottom out on each key press.",
    switches: [
      {
        name: "Cherry MX Black",
        manufacturer: "Cherry",
        switch: "Linear",
        actuationDistance: "2mm",
        actuationForce: "60cN",
        image: "/images/mx-black-380x380.png",
        facts: [
          "It does not provide any feedback when hitting the actuation point and it just generates noise when bottoming out.",
          "As you get no feedback about the actuation, you probably bottom out every key press. As a consequence, the likelihood of accidental presses might get reduced",
          // "it can be quite tiresome to traverse the entire switch at every key press.",
          // "As a result, the Cherry MX Black switches are mostly used by gamers, especially for RTS and shooter games. Typists usually choose other switch types.",
        ],
      },
      {
        name: "Cherry MX Red",
        manufacturer: "Cherry",
        switch: "Linear",
        actuationDistance: "2mm",
        actuationForce: "45cN",
        image: "/images/cherry-red.png",
        facts: [
          "Similar to the Cherry MX Black",
          "The Cherry MX Red requires far less actuation force",
          "As this enables faster actuation, the Cherry MX Red is a very popular choice in gaming keyboards.",
        ],
      },
      {
        name: "Cherry MX Speed (Silver)",
        manufacturer: "Cherry",
        switch: "Linear",
        actuationDistance: "1.2mm",
        actuationForce: "45cN",
        image:
          "https://cdn-reichelt.de/bilder/web/xxl_ws/E500/CHERRY_MX1A-51NN_01.png",
        facts: [
          "A linear switch similar to Cherry MX Red",
          "The Cherry MX Speed are primarily used for gaming.",
        ],
      },
      {
        name: "Razer Yellow Switch",
        manufacturer: "Razer/Kailh/others",
        switch: "linear",
        actuationDistance: "1.2mm",
        actuationForce: "45g",
        image:
          "https://assets2.razerzone.com/images/mechanical-switches/yellow-switch-dualside.png",
        facts: [
          "The Razer Yellow Switch has similar characteristics as the Cherry MX Red, but much less actuation distance.",
        ],
      },
      {
        name: "Romer-G Linear",
        manufacturer: "Logitech",
        switch: "linear",
        actuationDistance: "1.5mm",
        actuationForce: "45g",
        image: "/images/romer G linear.png",
        facts: [
          "The switches are produced by the company itself in partnership with the Japanese electronics company Omron",
          "The Romer-G Linear, has no tactile feedback",
        ],
      },
      {
        name: "SteelSeries QS1",
        manufacturer: "Kailh",
        switch: "linear",
        actuationDistance: "1.5mm",
        actuationForce: "45g",
        image: "/images/250px-SteelSeries_QS1_--_top.png",
        facts: [
          "Linear switch with very short actuation distance",
          "It is built for speed and targets gamers",
          "The most similar Cherry MX switch is the Cherry MX Red.",
        ],
      },
      {
        name: "Razer Linear Optical Switch",
        manufacturer: "Razer & Partners",
        switch: "linear",
        actuationDistance: "1.0mm",
        actuationForce: "40g",
        image: "/images/razer-linear-optical-switch-380x308.png",
        facts: [
          "Very short actuation distance ",
          "Due to the very own characteristics of these switches, it’s a good idea to plan a little time to get used to them.",
        ],
      },
      {
        name: "Razer Analog Optical Switch",
        manufacturer: "Razer & Partners",
        switch: "linear",
        actuationDistance: "1.5-3.6mm",
        actuationForce: "variable",
        image: "/images/Razer-Analog-Optical-Switch-Small-380x294.png",
        facts: [
          "An analog switch with the ability to not only detect if a key is pressed but also measure how far it is pressed ",
          "It enables finer movement control in games, similar to a joystick.",
          // "It can be configured at which point the switch should actuate and it’s even possible to register two actions for different actuation points of a single key stroke",
        ],
      },
    ],
  },
  {
    type: "Tactile",
    description:
      "Provide tactile feedback, when hitting the actuation point. As you press the key down, you will notice a small bump, which lets you know, that your key press got successfully registered.",
    switches: [
      {
        name: "Cherry MX Brown",
        manufacturer: "Cherry",
        switch: "Tactile",
        actuationDistance: "2mm",
        actuationForce: "55cN",
        image: "/images/mx-brown-380x380.png",
        facts: [
          "Is one of the most popular switch types right now.",
          "The switch represents quite a nice hybrid between gaming and typing",
          // "The switch provides a tactile feedback, but does not generate a sound like the Cherry MX Blue.",
          // "Additional, they are often used in environments, where the Cherry MX Blue switches are too loud, but fast typing is desired.",
        ],
      },
      {
        name: "Cherry MX Clear",
        manufacturer: "Cherry",
        switch: "Tactile",
        actuationDistance: "2mm",
        actuationForce: "65cN",
        image:
          "https://www.cherrymx.de/_Resources/Persistent/d4590fb28ccb469a09470e6826fa4f69b5e5aa74/img-productstage-mxClear%402x-368x368.png",
        facts: ["Similar to the Cherry MX Brown"],
      },
      {
        name: "Razer Orange Switch",
        manufacturer: "Razer/Kalih/others",
        switch: "Tactile",
        actuationDistance: "1.9mm",
        actuationForce: "45g",
        image:
          "https://assets2.razerzone.com/images/mechanical-switches/orange-switch-dualside.png",
        facts: [
          "Switch for mechanical keyboard",
          "can be compared to the Cherry MX Brown",
          "Has slightly less actuation distance than Cherry MX Brown switch",
        ],
      },
      {
        name: "Romer-G Tactile",
        manufacturer: "Logitech",
        switch: "Tactile",
        actuationDistance: "1.5mm",
        actuationForce: "45g",
        image:
          "/images/Logitech-Romer-G-RGB-switch-ormon-tactile-switch-low-profile-mechanical-key-switch-B3K-for-G910.jpg_q50.png",
        facts: [
          "Provide tactile feedback and are more quiet than most Cherry MX Switches",
        ],
      },
    ],
  },
  {
    type: "Clicky",
    description:
      "Provide an additional click sound, when hitting the actuation point. The main advantage of tactile and clicky switches is that you don’t have to push the key all the way down. You can release the key immediately after you receive the feedback.",
    switches: [
      {
        name: "Cherry MX Blue",
        manufacturer: "Cherry",
        switch: "Clicky",
        actuationDistance: "2.2mm",
        actuationForce: "60cN",
        image: "/images/mx-blue-380x380.png",
        facts: [
          "The Cherry MX Blue is the favored switch type of most typing enthusiasts",
          "The Cherry MX Blue provides tactile feedback and has a loud and clear click sound",
          "Hearing the click sound is really satisfying.",
          // "Keyboards with Cherry MX Blue switches are usually quite loud",
        ],
      },
      {
        name: "Cherry MX Green",
        manufacturer: "Cherry",
        switch: "Clicky",
        actuationDistance: "2.2mm",
        actuationForce: "80cN",
        image:
          "https://cdn-reichelt.de/bilder/web/xxl_ws/E500/CHERRY_MX1A-F1NN_01.png",
        facts: [
          "The Cherry MX Green are similar to the Cherry MX Blue, but with an actuation force of 80 cN.",
          "They are primarily used for space bars.",
        ],
      },
      {
        name: "Razer Green Switch",
        manufacturer: "Razer / Kailh / others",
        switch: "Clicky",
        actuationDistance: "1.9mm",
        actuationForce: "50g",
        image:
          "https://assets2.razerzone.com/images/mechanical-switches/green-switch-dualside.png",
        facts: [
          "The Razer Green Switch is similar to the Cherry MX Blue, but has less actuation distance and force.",
        ],
      },
      {
        name: "Razer Clicky Optical Switch",
        manufacturer: "Razer & Partners",
        switch: "Clicky",
        actuationDistance: "1.5mm",
        actuationForce: "45g",
        image: "/images/razer-clicky-optical-switch-380x311.png",
        facts: [
          "Provides tactile and audible feedback",
          "For the coloring, Razer has chosen purple.",
        ],
      },
    ],
  },
];

export const preBuildKB = [
  {
    name: "VC-500",
    price: 35,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In ornare quam viverra orci sagittis eu volutpat odio facilisis.",
    img: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80",
  },
  {
    name: "NB Steel",
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In ornare quam viverra orci sagittis eu volutpat odio facilisis.",
    img: "https://images.unsplash.com/photo-1623710153070-767cb3619e37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
  },
  {
    name: "KMV Standard",
    price: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In ornare quam viverra orci sagittis eu volutpat odio facilisis.",
    img: "https://m.media-amazon.com/images/I/71nRfZNacyL._AC_SL1500_.jpg",
  },
  {
    name: "VC-500",
    price: 35,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In ornare quam viverra orci sagittis eu volutpat odio facilisis.",
    img: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80",
  },
  {
    name: "VC-500",
    price: 35,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In ornare quam viverra orci sagittis eu volutpat odio facilisis.",
    img: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80",
  },
  {
    name: "VC-500",
    price: 35,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. In ornare quam viverra orci sagittis eu volutpat odio facilisis.",
    img: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80",
  },
];
