<template>
  <section class="shopping-banner mt-5  d-flex align-items-center opacity-75">
    <div class="border border-light w-100 mx-4 mx-md-8 p-s">
      <h2 class="text-light text-center border border-light border-3 fw-light">購物說明</h2>
    </div>
  </section>
  <div class="container mt-6">
    <div class="row">
      <div class="col-md-6  mt-2 mt-md-0 px-3">
        <h3 class="fw-light fs-4 fs-md-3">
          <i class="bi bi-exclamation-circle"></i>
          購物相關問題
        </h3>
        <ul class="list-style-square ms-4">
          <li class="mt-1">選購商品後請再次確認收件資訊、總額及到貨日期</li>
          <li class="mt-1">匯款請於三天內完成，並主動告知小編匯款訊息</li>
          <li class="mt-1">包裹會在到貨日前一天出貨，並在訂單更新宅配單號</li>
          <li class="mt-1">選擇商品面交者請主動跟小編聯絡面交資訊</li>
        </ul>
        <h3 class="fw-light fs-4 fs-md-3 mt-3">
          <i class="bi bi-exclamation-circle"></i>
          宅配需知
        </h3>
         <ul class="list-style-square ms-4">
          <li class="mt-1">本公司均以黑貓冷凍宅配寄送，因疫情影響自110.5月起，週一、週六、周日皆不提供配送，這裡會於您指定前一天準時寄出，但宅配端皆有延遲到貨的風險(亦無法指定時段)，若有延遲將縮壓賞味期限，敬請考量此風險後再下單</li>
          <li class="mt-1">因疫情影響自110.5月起，宅配端公告無法指定偏好時段配送，實際配送時間以司機當日路線安排為主</li>
          <li class="mt-1">部分偏遠地區宅配恕無每日配送，若有疑慮可先致電黑貓客服詢問</li>
          <li class="mt-1">目前僅提供台灣本島宅配，外島地區目前恕無配送</li>
          <li class="mt-1">黑貓客服: 412-8888#2(手機撥+02)</li>
        </ul>
      </div>
      <div class="col-md-6 mt-5">
        <div class="border border-light rounded-3 p-2 bg-secondary">
          <h4 class="fs-6 fw-light">※ 貼心提醒</h4>
          <ul class="list-style-square ms-2 fw-light">
            <li class="mt-1">接單生產、新鮮製作。產品保存期限請詳見包裝標示，請趁新鮮享用。</li>
            <li class="mt-1">商品圖片僅供參考。</li>
            <li class="mt-1">因食品因保存期限以及衛生考量，一經拆封使用，或非運送過程失溫導致商品變質者，恕不適用7天鑑賞期。</li>
            <li class="mt-1">如遇新品瑕疵需辦理退換貨者，請維持商品完整性，保留原包裝及發票，並於3日內辦理退換貨，逾期恕不受理。</li>
            <li class="mt-1">如欲取消訂單，請在下訂單後，訂單狀態在處理中前變更取消。</li>
            <li class="mt-1">宅配有碰損風險，請可接受者再下單。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <FooterView></FooterView>
</template>

<script>
import FooterView from '@/components/FooterView.vue'
export default {
  components: {
    FooterView
  }
}
</script>
