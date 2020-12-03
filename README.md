# 설명 및 공지사항
- 프론트는 React와 Typescript를 이용하였고, 모바일 버전에도 사용할 수 있도록 화면을 디자인했습니다.
- 백엔드는 flask를 사용하였습니다.
- 머신러닝 모델은 U-GAT-IT 모델( https://github.com/taki0112/UGATIT )을 사용하였고, ESRGAN을 이용하여 개선해보았습니다.
- react-native를 이용한 앱도 개발할 예정입니다.
- (12/04) 모델이 GPU가 없는 서버에서는 작동하지 않아, 배포를 고민하고 있습니다. 현재 flask 서버와 모델 간의 연결도 막아 놓았고 개발 중단 중에 있습니다.
# 동영상 링크
- 유튜브 링크 : https://www.youtube.com/watch?v=MzxnIA9rVHk&feature=youtu.be

# 설치 방법
1. frontend/me2style 폴더에 들어가서  
```
npm install
npm run start
```

2. backend/flask 폴더에 들어가서
```
python app.py
```

# 개발자
- 프론트/백엔드 : 박규영(필자)
- 머신러닝 : 김민수, 신준범

