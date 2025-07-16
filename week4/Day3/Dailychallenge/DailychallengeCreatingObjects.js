
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}
const video1 = new Video("Learn JavaScript in 10 Hours", "Ayoub", 600);
video1.watch(); 

const video2 = new Video("Cooking with Olive Oil", "Fatima", 300);
video2.watch();

const videoData = [
  { title: "Travel Vlog: Japan", uploader: "Omar", time: 420 },
  { title: "Football Highlights", uploader: "Nora", time: 180 },
  { title: "Learn React", uploader: "Youssef", time: 900 },
  { title: "Gaming Stream", uploader: "Sara", time: 720 },
  { title: "History Documentary", uploader: "Zineb", time: 1200 }
];

const videos = [];

videoData.forEach(data => {
  const video = new Video(data.title, data.uploader, data.time);
  videos.push(video);
  video.watch();
});
