const Contact = () => {
    return (
        <>
            <section class="bg-light pg-lib-item position-relative">
                <div class="position-absolute h-100 w-100">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31335.99222917873!2d106.46637918833414!3d10.963445259983466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b2b6f55313281%3A0xab2f21ee57417ee2!2z4bqkcCBUw6JuIFRp4bq_biwgVMOibiBUaMO0bmcgSOG7mWksIEPhu6cgQ2hpLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1732888965115!5m2!1svi!2s" height="550" frameborder="0" aria-hidden="false" tabindex="0" width="100%" class="h-100 position-absolute start-0 top-0 w-100" title="Pinegrow location map"></iframe>
                </div>
                <div class="d-lg-none invisible mb-5 pb-5 pt-5"></div>
                <div class="container pt-5 pt-lg-0">
                    <div class="row">
                        <div class="col-lg-7 col-xl-6 ms-auto py-5">
                            <div class="bg-white mb-lg-0 p-4 p-lg-5 position-relative shadow rounded-3">
                                <h2 class="mb-5 fw-semibold">Liên hệ với chúng tôi</h2>
                                <form>
                                    <div class="mb-4">
                                        <input type="text" class="form-control py-2" placeholder="Nhập tên..." />
                                    </div>
                                    <div class="mb-4">
                                        <input type="email" class="form-control py-2" placeholder="Nhập email..." />
                                    </div>
                                    <div class="mb-3 mb-4">
                                        <textarea class="form-control py-2" rows="6" placeholder="Nhập tin nhắn của bạn..."></textarea>
                                    </div>
                                    <button type="submit" class="btn d-block w-100 text-uppercase btn-dark py-2 fw-medium">Nộp</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;