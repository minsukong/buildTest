# test


## 라운지 임시 UI 검수

- [홈페이지](https://minsukong.github.io/buildTest/website/preview/)
- [WebView](https://minsukong.github.io/buildTest/webview/preview/)
- [Storybook](https://minsukong.github.io/buildTest/storybook/)

GitHub Pages는 main 브랜치 루트에서 제공합니다. 이 저장소에는 정적 빌드 결과만 게시합니다.
원본은 lounge-docs/front-end에서 관리하며, 공통 UI 변경 시 두 앱과 Storybook을 각각 다시 빌드합니다.
Next.js 검수 빌드의 LOUNGE_PREVIEW_BASE_PATH는 /buildTest/website 또는 /buildTest/webview입니다.
각 앱의 dist/preview 내용을 해당 폴더에, packages/ui/storybook-static 내용을 storybook/에 복사합니다.
.nojekyll과 루트 index.html을 유지합니다. 이 화면은 운영 회원·결제 서비스가 아닙니다.
