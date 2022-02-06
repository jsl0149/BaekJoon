# G2-릴레이 프로젝트

# 프로젝트 K-PLAY

---

많은 외국인들이 `K-pop`을 좋아합니다. 그것을 바탕으로 한국어를 배우는 외국인들도 급증하고 있습니다. 이러한 수요에 맞춰서 저희는 `K-PLAY`라는 프로그램을 기획했습니다. 저희 프로그램은 원하는 노래를 입력받아 가사에 대한 의미와 발음을 분석해서 보여줍니다.

## K-POP 성장 그래프

![1.png](https://adorable-scribe-a43.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5fb6ee58-a687-4d91-b927-b59da661485f%2FUntitled.png?table=block&id=202ff5fe-a12d-4208-89ef-c177a4be430c&spaceId=697faca6-3e3d-48a2-8eeb-a73700099dff&width=720&userId=&cache=v2)

![2.png](https://adorable-scribe-a43.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdcc69d30-3037-4f26-9adf-5929875f759f%2F20190827112236303_1.jpg?table=block&id=39c59335-3570-4d97-90d1-166280bd021f&spaceId=697faca6-3e3d-48a2-8eeb-a73700099dff&width=1600&userId=&cache=v2)

![3.png](https://adorable-scribe-a43.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F97cbd683-6dae-429c-995b-409d8978055a%2FUntitled.png?table=block&id=cfcdbc99-2198-4c1e-a356-447a17b0c776&spaceId=697faca6-3e3d-48a2-8eeb-a73700099dff&width=960&userId=&cache=v2)

이미지 출처 : [http://m.kmib.co.kr/view.asp?arcid=0014594468](http://m.kmib.co.kr/view.asp?arcid=0014594468), ([https://www.kocis.go.kr/koreanet/view.do?seq=1013383&RN=3](https://www.kocis.go.kr/koreanet/view.do?seq=1013383&RN=3))

[https://www.chosun.com/economy/mint/2021/04/16/2QPESIJWNFFN5ANZM2RBAT7KXA/](https://www.chosun.com/economy/mint/2021/04/16/2QPESIJWNFFN5ANZM2RBAT7KXA/)

▲ K팝 팬덤 현상을 분석하는 민간 연구소 ‘블립’이 지난 21일 공개한 ‘K팝 세계지도(2019 GLOBAL K-POP MAP)’ 일부. 지난해 7월 1일부터 올해 6월 30일까지 국내 아이돌 76개 팀의 유튜브 데이터를 분석했다. 동그라미가 클수록 K팝 인기가 높은 지역이다.

# 간단한 기획

---

검색어를 바탕으로 음악에 관한 데이터를 얻어옵니다. 그 후 결과를 화면에 보여주고 번역서비스 및 TTS 기능도 제공하는 어플리케이션을 제작합니다. 북마크 기능으로 원하는 문장은 언제나 찾아볼 수 있도록 지원합니다.

# 플로우 🤟

---

![4.png](https://adorable-scribe-a43.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe410228e-d608-492d-b060-c854b19d216e%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.05.04.png?table=block&id=68d97edc-d652-4c14-879f-b0964cc63059&spaceId=697faca6-3e3d-48a2-8eeb-a73700099dff&width=3620&userId=&cache=v2)
# A 기능

- 검색창에 키워드를 입력하여 검색하면 키워드가 포함된 가사의 노래를 리스트로 보여주는 화면으로 이동합니다.
리스트는 [썸네일, 가수명, 곡 제목, 키워드가 포함된 가사 문장]을 포함합니다.
- 검색결과가 나오는 화면에서 노래 가사를 터치하면 상세 화면으로 이동합니다.
상세 화면의 상단에는 곡의 상세 정보가 표시된다. 상세 정보는 [앨범 발매 년도, 작곡가, 해당 음원을 들을 수 있는 음원사이트 링크] 등 자유롭게 구성이 가능합니다.

![5.png](https://adorable-scribe-a43.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fee4c3bc6-e7d9-468b-919d-dc088e2b0b3f%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.37.52.png?table=block&id=fd64b1fc-8e72-4938-b31c-7eee46bd38b3&spaceId=697faca6-3e3d-48a2-8eeb-a73700099dff&width=730&userId=&cache=v2)

![6.png](https://adorable-scribe-a43.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2338da05-74e6-4a8c-bb3f-1fa090355fe8%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.31.10.png?table=block&id=a5bb4f4f-596b-46d7-ae9b-35d3d31474dc&spaceId=697faca6-3e3d-48a2-8eeb-a73700099dff&width=730&userId=&cache=v2)

# B 기능

- 상세화면의 하단에는 해당 한국어 가사의 번역 결과가 표시됩니다.
- 상세화면에서 재생 버튼을 누르면 각 언어의 발음을 들려줍니다.

![7.png](https://adorable-scribe-a43.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fea325325-6694-4549-8a92-86357972dc76%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-07-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.31.23.png?table=block&id=66b63df2-03fd-46ad-b377-2aeeb0e1d3c3&spaceId=697faca6-3e3d-48a2-8eeb-a73700099dff&width=730&userId=&cache=v2)

## C 기능

- 사용자는 나중에 다시 공부할 가사 문장을 북마크할 수 있습니다.
- 북마크 탭에선 상세 화면에서 북마크했던 문장과 곡 정보를 보여줍니다.
- 북마크탭의 리스트 화면에서 북마크를 해제함으로써 해당 가사를 지울 수 있습니다.

![8.png](https://adorable-scribe-a43.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd39766c5-83d7-418d-871d-93415209a546%2FUntitled.png?table=block&id=e7b8427a-fdf6-4961-b3ae-c3e4f3e6be67&spaceId=697faca6-3e3d-48a2-8eeb-a73700099dff&width=730&userId=&cache=v2)

![9.png](https://adorable-scribe-a43.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc097a7a2-4092-4790-b7f9-161b2894da5c%2FUntitled.png?table=block&id=8af637d3-f2fb-47b4-bece-92c8d3041468&spaceId=697faca6-3e3d-48a2-8eeb-a73700099dff&width=750&userId=&cache=v2)
