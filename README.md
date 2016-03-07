# griiid
griiid is an effort to bring familiar design layout tools to Chrome. 

### Done
* [x] Rulers
* [x] Draggable Guidelines

### To fix:
* [ ] Hook rulers up to a site's internal scrolling
* [ ] There may be installation issues with Windows. Investigate. 

### Future
* [ ] Configurable measurements (rem, px, etc)
* [ ] Layout grid generation
* [ ] Baseline grid generation
* [ ] Framework aware responsive grid generation (Bootstrap, Foundation, etc)
* [ ] Configurable color and grid settings
* [ ] Smart guide snapping

### Contribute
Fork this repo then run the following in terminal
```
git clone <your_forked_repo>
cd <your_forked_repo>
npm install
npm start
open http://localhost:8080/
```

### How to install the dev version in Chrome
```
npm run build
```

1. Open up chrome and navigate to `chrome://extensions`
2. Check `Developer Mode`
3. Click `Load unpacked extension`
4. Navigate to this project's `dist` folder and select it

