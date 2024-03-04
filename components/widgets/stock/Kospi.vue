<template>
    <div v-if="pending" class="row my-4">
        <h2>Loading...</h2>
    </div>
    <div v-else class="row my-4">
        <div class="col-12 col-lg-12">
            <div class="card">
                <div class="card-header pb-0">
                    <h5><b>Kospi</b>
                        <span class="badge badge-dot me-4">
                            <i class="bg-info"></i>
                            <span class="text-dark text-sm">{{ stocks.date }}</span>
                        </span>
                        <span class="text-dark text-sm">▲<b>{{ stocks.standard.diffPercent }}</b>% {{
        $t('stock.kospi.rate') }}, ▲<b>{{
        stocks.standard.volume.toLocaleString() }}</b> {{
        $t('stock.kospi.volume') }}</span>
                    </h5>
                </div>
                <div class="table-responsive">
                    <table class="table align-items-center mb-0">
                        <thead>
                            <tr>
                                <th class="text-uppercase text-sm font-weight-bolder">{{
        $t('stock.kospi.name') }}</th>
                                <th class="text-uppercase text-sm font-weight-bolder">
                                    {{ $t('stock.kospi.price') }}</th>
                                <th class="text-center text-uppercase text-sm font-weight-bolder ps-2">
                                    {{
        $t('stock.kospi.rate') }}
                                </th>
                                <th class="text-center text-uppercase text-sm font-weight-bolder">
                                    {{ $t('stock.kospi.volume') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in stocks.kospi">
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div>
                                            <img src="@/assets/img/icon/stock-1.png" class="avatar avatar-xs me-3"
                                                alt="avatar image">
                                        </div>
                                        <div class="d-flex flex-column justify-content-center">
                                            <h6 class="mb-0 text-sm">{{ item.name }}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="text-bold text-dark text-sm">￦ {{ item.price }}</span>
                                </td>
                                <td class="align-middle text-sm">
                                    <p class="text-secondary mb-0 text-sm text-danger text-bold">▲{{ item.diff }}
                                        &nbsp;{{
        item.diffPercent }}</p>
                                </td>
                                <td class="align-middle text-center">
                                    <span class="text-secondary text-sm"><b>{{ item.volume }}</b> volumes</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-12">&nbsp;</div>
        <div class="col-12 col-lg-12">
            <div class="card">
                <div class="card-header pb-0">
                    <h5><b>Kosdaq</b>
                        <span class="badge badge-dot me-4">
                            <i class="bg-info"></i>
                            <span class="text-dark text-sm">{{ stocks.date }}</span>
                        </span>
                        <span class="text-dark text-sm">▲<b>{{ stocks.standard.diffPercent }}</b>% {{
        $t('stock.kospi.rate') }}, ▲<b>{{
        stocks.standard.volume.toLocaleString() }}</b> {{
        $t('stock.kospi.volume') }}</span>
                    </h5>
                </div>
                <div class="table-responsive">
                    <table class="table align-items-center mb-0">
                        <thead>
                            <tr>
                                <th class="text-uppercase text-sm font-weight-bolder">{{
        $t('stock.kospi.name') }}</th>
                                <th class="text-uppercase text-sm font-weight-bolder">
                                    {{ $t('stock.kospi.price') }}</th>
                                <th class="text-center text-uppercase text-sm font-weight-bolder ps-2">
                                    {{
        $t('stock.kospi.rate') }}
                                </th>
                                <th class="text-center text-uppercase text-sm font-weight-bolder">
                                    {{ $t('stock.kospi.volume') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in stocks.kosdaq">
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div>
                                            <img src="@/assets/img/icon/stock-1.png" class="avatar avatar-xs me-3"
                                                alt="avatar image">
                                        </div>
                                        <div class="d-flex flex-column justify-content-center">
                                            <h6 class="mb-0 text-sm">{{ item.name }}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="text-bold text-dark text-sm">￦ {{ item.price }}</span>
                                </td>
                                <td class="align-middle text-sm">
                                    <p class="text-secondary mb-0 text-sm text-danger text-bold">▲{{ item.diff }}
                                        &nbsp;{{
                                        item.diffPercent }}</p>
                                </td>
                                <td class="align-middle text-center">
                                    <span class="text-secondary text-sm"><b>{{ item.volume }}</b> volumes</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-12">&nbsp;</div>
    </div>
</template>

<script setup lang="ts">
import superjson from 'superjson'

const { pending, data: stocks } = await useFetch('/api/stock/kospi', {
    transform: (value) => {
        return superjson.parse(value as unknown as string)
    }
})
</script>