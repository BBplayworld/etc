<template>
    <div class="card border-sm-1">
        <div class="card-header pb-0">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <h6>{{ $t('stock.watering.title') }}</h6>
                    <p class="text-sm mb-0">
                        <i class="fa fa-check text-info" aria-hidden="true"></i>
                        <span> &nbsp;{{ $t('stock.watering.titleInfo') }}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-6 py-3 ps-0">
                    <div class="d-flex mb-2">
                        <div
                            class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                        </div>
                        <p class="text-xs mt-1 mb-0 font-weight-bold">{{ $t('stock.watering.averagePrice') }}</p>
                    </div>
                    <h4 class="font-weight-bolder">￦ {{ averagePrice }} <span class="text-sm font-weight-bolder"
                            :class="[(currentPrice > wateringPrice) ? 'text-danger' : 'text-blue']">{{
                                changeFlag }}</span></h4>
                    <div class="progress w-100">
                        <div class="progress-bar bg-dark w-80" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="col-6 py-3 ps-0">
                    <div class="d-flex mb-2">
                        <div
                            class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                        </div>
                        <p class="text-xs mt-1 mb-0 font-weight-bold">{{ $t('stock.watering.totalQuantity') }}</p>
                    </div>
                    <h4 class="font-weight-bolder">{{ totalQuantity }}</h4>
                    <div class="progress w-100">
                        <div class="progress-bar bg-dark w-80" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6 p-1">
                    <label>{{ $t('stock.watering.currentPrice') }}</label>
                    <div class="input-group">
                        <span class="input-group-text text-body"><i class="fas fa-won-sign" aria-hidden="true"></i></span>
                        <input type="text" class="form-control" placeholder="" v-model.number="currentPrice">
                    </div>
                </div>
                <div class="col-6 p-1">
                    <label>{{ $t('stock.watering.currentQuantity') }}</label>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="" v-model.number="currentQuantity">
                    </div>
                </div>
                <div class="col-12 pt-2"></div>
                <div class="col-6 p-1">
                    <label>{{ $t('stock.watering.wateringPrice') }}</label>
                    <div class="input-group">
                        <span class="input-group-text text-body"><i class="fas fa-won-sign" aria-hidden="true"></i></span>
                        <input type="text" class="form-control" placeholder="" v-model.number="wateringPrice">
                    </div>
                </div>
                <div class="col-6 p-1">
                    <label>{{ $t('stock.watering.wateringQuantity') }}</label>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="" v-model.number="wateringQuantity">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const func = {
    watering() {
        if (!currentPrice.value || !currentQuantity.value || !wateringPrice.value || !wateringQuantity.value) { return }

        totalQuantity.value = currentQuantity.value + wateringQuantity.value
        averagePrice.value = Math.round(((currentPrice.value * currentQuantity.value) + (wateringPrice.value * wateringQuantity.value)) / totalQuantity.value * 100) / 100

        changeFlag.value = Math.round(((averagePrice.value - currentPrice.value) / currentPrice.value) * 100 * 100) / 100
        Math.sign(changeFlag.value) >= 0 ? changeFlag.value = `+${changeFlag.value}% Increase` : changeFlag.value = `-${changeFlag.value}% Decrease`

        totalQuantity.value = totalQuantity.value.toLocaleString()
        averagePrice.value = averagePrice.value.toLocaleString()
    }
}

const currentPrice = defineModel('currentPrice', { default: 100, set: func.watering })
const currentQuantity = defineModel('currentQuantity', { default: 1, set: func.watering })
const wateringPrice = defineModel('wateringPrice', { default: 100, set: func.watering })
const wateringQuantity = defineModel('wateringQuantity', { default: 1, set: func.watering })
const averagePrice = defineModel('averagePrice', { default: 100 })
const changeFlag = defineModel('changeFlag', { default: '' })
const totalQuantity = defineModel('totalQuantity', { default: 1 })
</script>