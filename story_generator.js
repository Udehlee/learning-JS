    const output = document.querySelector("#story_btn");
    const storyText = document.querySelector("#storyText");

    const Story = [
      "Story, story!",
      "Once upon a time",
      "Time, time!",
      "The title of my story is .....'."
    ];

    function pickRandomly(array) {
      const random = Math.floor(Math.random() * array.length);
      return array[random];
    }

    output.addEventListener('click', generateStory);

    function generateStory() {
      const randomStory = pickRandomly(Story);
      storyText.textContent = randomStory;
    }
