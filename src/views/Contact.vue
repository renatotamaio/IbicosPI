<template>
      <section class="u-clearfix u-white u-section-2" id="carousel_f70a">
        <div class="u-clearfix u-sheet u-sheet-1">
          <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div class="u-layout">
              <div class="u-layout-row">
                <div class="u-container-style u-layout-cell u-left-cell u-similar-fill u-size-30 u-layout-cell-1">
                  <div class="u-container-layout u-container-layout-1">
                    <h1 class="u-heading-font u-text u-text-palette-1-base u-text-2">iBicos</h1>
                    <div class="u-border-3 u-border-palette-1-base u-line u-line-horizontal u-line-1"></div>
                    <p><b>Entre em contato com o IBicos:</b></p>
                    <p>Whatsapp Número: <b>  +55 16 993219321 </b></p>
                    <p>Instagram: <b><a href="https://www.instagram.com/ibicospi/">IBicospi</a></b></p>
                    <p>Facebook: <b><a href="https://www.facebook.com/profile.php?id=100086046595477">IBicospi</a></b> </p>
                    <br>
                    <p><b>Envie sua mensagem para a equipe IBicos:</b></p>
 <!-- Bootstrap 5 starter form -->
 <form id="contactForm" data-sb-form-api-token="API_TOKEN">

  <!-- Name input -->
  <div class="mb-3">
    <label class="form-label" for="name"><b>Nome:</b></label>
    <input class="form-control" id="name" type="text" placeholder="Digite seu Nome" data-sb-validations="required" />
    <div class="invalid-feedback" data-sb-feedback="name:required">Por favor insira seu nome.</div>
  </div>

  <!-- Email address input -->
  <div class="mb-3">
    <label class="form-label" for="emailAddress"><b>Email:</b></label>
    <input class="form-control" id="emailAddress" type="email" placeholder="Digite se Email" data-sb-validations="required, email" />
    <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Por favor insira seu Email.</div>
    <div class="invalid-feedback" data-sb-feedback="emailAddress:email">Por favor insira um Email valido</div>
  </div>

  <!-- Message input -->
  <div class="mb-3">
    <label class="form-label" for="message"><b>Mensagem:</b></label>
    <textarea class="form-control" id="message" type="text" placeholder="Escreva sua mensagem" style="height: 10rem;" data-sb-validations="required"></textarea>
    <div class="invalid-feedback" data-sb-feedback="message:required">Por favor insira sua mensagem</div>
  </div>

  <!-- Form submissions success message -->
  <div class="d-none" id="submitSuccessMessage">
    <div class="text-center mb-3">Mensagem enviada!</div>
  </div>

  <!-- Form submissions error message -->
  <div class="d-none" id="submitErrorMessage">
    <div class="text-center text-danger mb-3">Mensagem não enviada!</div>
  </div>

  <!-- Form submit button -->
  <div class="d-grid">
    <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Enviar</button>
  </div>

</form>

</div>
                    
                  </div>
                </div>
               </div>
            </div>
          </div>
        
      </section>
</template>
<script>
export default {
    name:"Contact"
}
</script>
