import { reactive } from "vue";
import { posts } from "./utils/data.js";
class Store {
  constructor() {
    this.state = reactive({
      posts,
      currentHashtag: null,
    });
  }
  setCurrentHashtag(hashtag) {
    this.state.currentHashtag = hashtag;
  }
  incrementLikes(post) {
    const postToUpdate = this.state.posts.find((p) => p.id === post.id);
    if (!postToUpdate) return;
    postToUpdate.likes++;
  }
  get filteredPosts() {
    if (!this.state.currentHashtag) return this.state.posts;
    return this.state.posts.filter((post) =>
      post.hashtags.includes(this.state.currentHashtag),
    );
  }
}
export const store = new Store();
