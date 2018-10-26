# Schritte zur Lösung

1. Setup aufbauen

2. Add flex: 1 1 auto to allow grow and shrink of overflowing content area

3. Set overflow-y: auto of overflowing content area
  => complete Content is Scrolling

4. add overflow: hidden; to body to avoid page Scrolling
  => now one line in content-list is missing 

5. add height: 0; to content-list, which should force the browser to limit height of content-list to the height calculated by the flexbox and to show y-scrollbar inside content-list on content overflow
  => content-list is not visible at all

6. Read this article: 
   https://medium.com/@stephenbunch/how-to-make-a-scrollable-container-with-dynamic-height-using-flexbox-5914a26ae336

7. Figured that Content-Wrapper in my example may be missing a flexbox
  => Aparently, this is true. The content is now visible and scrollable, after adding 

  ```
  .content-wrapper {
    display: flex;
    flex-flow: column nowrap;
  }
  ```

  However, the horizontal line is now only 2x2 px. 

7. Adding the following does NOT help
  ```
  .content-wrapper {
    align-items: stretch;
  }
  ```

8. Flexbox for Content-Wrapper & for Content look suspiciously similar now. Try to remove Content flexbox. 
=> This worked, but now the content-wrapper is a tiny bit to long. Looks like a typical problem with css box-sizing model

9. Applying border-box fix from https://css-tricks.com/box-sizing/
  => This fixed my overflowing padding, Hoorayyy!