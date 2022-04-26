function like(element){
    element.innerText++;
}
<div class="container">
<div class="top">
    <ul>Some User</ul>
        <li id="like1"><span id="likeNum"> 3 </span> like(s) </li>
    <button onclick="like(likeNum)">Like</button>
</div>
<div class="bottom">
    <p>This is some filler text, it can say anything we like</p>
</div>
</div>
