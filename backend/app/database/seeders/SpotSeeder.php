<?php

namespace Database\Seeders;

use App\Models\Spot;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Spot::firstOrCreate(['name' => '北海道',]);
        Spot::firstOrCreate(['name' => '青森県',]);
        Spot::firstOrCreate(['name' => '岩手県',]);
        Spot::firstOrCreate(['name' => '宮城県',]);
        Spot::firstOrCreate(['name' => '秋田県',]);
        Spot::firstOrCreate(['name' => '山形県',]);
        Spot::firstOrCreate(['name' => '福島県',]);
        Spot::firstOrCreate(['name' => '茨城県',]);
        Spot::firstOrCreate(['name' => '栃木県',]);
        Spot::firstOrCreate(['name' => '群馬県',]);
        Spot::firstOrCreate(['name' => '埼玉県',]);
        Spot::firstOrCreate(['name' => '千葉県',]);
        Spot::firstOrCreate(['name' => '東京都',]);
        Spot::firstOrCreate(['name' => '神奈川県',]);
        Spot::firstOrCreate(['name' => '新潟県',]);
        Spot::firstOrCreate(['name' => '富山県',]);
        Spot::firstOrCreate(['name' => '石川県',]);
        Spot::firstOrCreate(['name' => '福井県',]);
        Spot::firstOrCreate(['name' => '山梨県',]);
        Spot::firstOrCreate(['name' => '長野県',]);
        Spot::firstOrCreate(['name' => '岐阜県',]);
        Spot::firstOrCreate(['name' => '静岡県',]);
        Spot::firstOrCreate(['name' => '愛知県',]);
        Spot::firstOrCreate(['name' => '三重県',]);
        Spot::firstOrCreate(['name' => '滋賀県',]);
        Spot::firstOrCreate(['name' => '京都府',]);
        Spot::firstOrCreate(['name' => '大阪府',]);
        Spot::firstOrCreate(['name' => '兵庫県',]);
        Spot::firstOrCreate(['name' => '奈良県',]);
        Spot::firstOrCreate(['name' => '和歌山県',]);
        Spot::firstOrCreate(['name' => '鳥取県',]);
        Spot::firstOrCreate(['name' => '島根県',]);
        Spot::firstOrCreate(['name' => '岡山県',]);
        Spot::firstOrCreate(['name' => '広島県',]);
        Spot::firstOrCreate(['name' => '山口県',]);
        Spot::firstOrCreate(['name' => '徳島県',]);
        Spot::firstOrCreate(['name' => '香川県',]);
        Spot::firstOrCreate(['name' => '愛媛県',]);
        Spot::firstOrCreate(['name' => '高知県',]);
        Spot::firstOrCreate(['name' => '福岡県',]);
        Spot::firstOrCreate(['name' => '佐賀県',]);
        Spot::firstOrCreate(['name' => '長崎県',]);
        Spot::firstOrCreate(['name' => '熊本県',]);
        Spot::firstOrCreate(['name' => '大分県',]);
        Spot::firstOrCreate(['name' => '宮崎県',]);
        Spot::firstOrCreate(['name' => '鹿児島県',]);
        Spot::firstOrCreate(['name' => '沖縄県',]);
    }
}
