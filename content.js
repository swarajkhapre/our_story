/* =========================================================
   ALL TEXT AND PHOTOS LIVE HERE.
   To change a sentence or swap a photo, edit this file only.
   Photos go in the assets/ folder.
   ========================================================= */
const STORY = {

  /* ---------- Opening quiz (unlocks the site) ---------- */
  quiz: {
    eyebrow: 'A place only for us',
    title: 'Quick question first…',
    subtitle: 'Only one person in the world knows this answer.',
    question: 'What is the nickname you call Atul?',
    placeholder: 'Type your answer',
    button: 'Unlock our story',
    answer: 'jordan',                         // any case works: Jordan / JORDAN / jOrDaN
    wrong: 'How can you not know this? 😤'
  },

  /* ---------- Batch 1: the start ---------- */
  hero: {
    eyebrow: '19 November · Three years of us',
    title: 'Who would have <em>thought…</em>',
    lines: [
      '…that this little girl would one day fall for Atul?',
      'And that the silly guy would fall even harder for her. ♡'
    ],
    photo: 'assets/b1_1.jpg',
    caption: 'Little Dishani, no idea what was coming',
    cue: 'Our story starts here'
  },

  /* ---------- Batches 2 to 7 ---------- */
  chapters: [
    {
      id: 'friends',
      eyebrow: 'Before we were us',
      title: 'Just friends.<br><em>Every single day.</em>',
      text: [
        'Before we were a couple, we were two friends who somehow ended up together every single day. We would hang out without needing a reason, meet at any hour, and I would pick you up and drop you at your office like it was the most important job in the world.',
        'Somewhere between those rides, the endless talks and all the random plans, our bond kept getting stronger, until it quietly became the best thing in my life.'
      ],
      note: 'Those office rides were my favourite part of the day.',
      photos: ['assets/b2_1.jpg', 'assets/b2_2.jpg', 'assets/b2_3.jpg']
    },
    {
      id: 'first-trip',
      eyebrow: 'Our first trip as a couple',
      title: 'The trip that<br><em>started it all.</em>',
      text: [
        'Our very first trip after we became us, and it will always be special. You were clicking pictures of everything and shooting videos of every little thing you liked, so happy and so free.',
        'I can never forget the smile you had on those days. I think I fell for you all over again on that trip.'
      ],
      note: 'That smile. I will never forget it.',
      photos: ['assets/b3_3.jpg', 'assets/b3_1.jpg', 'assets/b3_2.jpg']
    },
    {
      id: 'ordinary',
      eyebrow: 'The everyday us',
      title: 'Ordinary moments,<br><em>or so we thought.</em>',
      text: [
        'Rides, dinners, functions, silly selfies and all our random hangouts. Back then they felt like regular days, so we never stopped to think about them.',
        'Little did we know these were the most special moments of all. It was only when the distance came that we realised how much they really meant to us.'
      ],
      note: 'If I had known, I would have held on a little longer.',
      photos: ['assets/b4_1.jpg', 'assets/b4_2.jpg', 'assets/b4_3.jpg', 'assets/b4_4.jpg', 'assets/b4_5.jpg', 'assets/b4_6.jpg'],
      video: { src: 'assets/b4_video.mp4', poster: 'assets/b4_video_poster.jpg', caption: 'Some memories are better when they move.' }
    },
    {
      id: 'last-day',
      eyebrow: 'The last day in the same city',
      title: 'Our last day<br><em>together.</em>',
      text: [
        'Then I dropped you at the station for Gurugram, and our long-distance relationship began.',
        'We smiled for the pictures, but I already knew how much I was going to miss having you right next to me.'
      ],
      note: 'The hardest goodbye, and the start of a new chapter.',
      photos: ['assets/b5_1.jpg', 'assets/b5_2.jpg']
    },
    {
      id: 'gurugram',
      eyebrow: 'Miles could not stop me',
      title: 'And then,<br><em>I came to you.</em>',
      text: [],
      visits: [
        { photo: 'assets/b6_1.jpg', when: 'June · Gurugram', title: 'The first visit',
          text: 'After months of missing you through a screen, I finally landed in Gurugram. The moment I saw you, all that waiting was worth it.' },
        { photo: 'assets/b6_2.jpg', when: 'September · Gurugram', title: 'Back again',
          text: 'A few months later I was on my way to you again. Same city, same excitement, and another bag full of memories to carry back home.' }
      ]
    },
    {
      id: 'ldr',
      eyebrow: 'Love, long distance',
      title: 'Miles apart,<br><em>one call away.</em>',
      text: [
        'FaceTime calls, video calls, silly filters, sleepy faces and kisses through the camera. Every single day we found a way to be together, even with a screen in between.',
        'Distance tried its best, but we still made it feel like us.'
      ],
      note: 'Same time tomorrow? ♡',
      photos: ['assets/b7_1.jpg', 'assets/b7_2.jpg', 'assets/b7_3.jpg', 'assets/b7_4.jpg'],
      layout: 'row'
    }
  ],

  /* ---------- Short letter ---------- */
  letter: {
    greeting: 'Dear Disha,',
    paragraphs: [
      'Three years. From two friends who met every day, to a couple on our first trip, to two people holding on to each other across all these miles.',
      'Thank you for every ride, every call, every smile and every time you chose us. Looking back at all these pictures, one thing is clear to me: the best moments of my life have you in them.',
      'Happy anniversary, my favourite person. Here is to the day when there is no distance left between us.'
    ],
    signature: 'Yours, always, Atul'
  },

  /* ---------- Feedback at the end ---------- */
  feedback: {
    eyebrow: 'One last thing',
    title: 'Your turn,<br><em>my favourite person.</em>',
    question: 'Are you ready to fill the feedback form?',
    confirm1: 'Are you sure?',
    confirm2: 'Asking for the last time… are you sure?',
    maxNo: 5,                                  // after 5 "No" taps, the No button disappears
    formLabel: 'Write anything you want. I am listening ♡',
    placeholder: 'Your words here…',
    send: 'Send my note',
    copyTip: 'Copy it and send it to me on WhatsApp, or just take a screenshot ♡'
  },

  footer: 'Made with love · 19 November · A + D'
};
