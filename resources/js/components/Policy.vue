<template>
    <div
        class="fixed inset-0 z-40 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-show="open"
    >
        <div
            class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
                @click="toogleModal"
            ></div>

            <span
                class="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
                >&#8203;</span
            >
            <div
                class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle"
            >
                <!-- Modal content -->
                <div class="relative rounded-lg bg-white py-4 shadow">
                    <div
                        class="mx-8 py-4 px-2 text-gray-700"
                    >
                        <p>
                            <strong>Politique de confidentialité</strong> <br>


                            <br> <strong>1. Collecte de l’information </strong> <br>

Nous recueillons certaines informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte et / ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom et prénom, votre adresse e-mail, numéro de téléphone, et l'ensemble des informations que vous souhaitez diffuser sur votre compte en ligne, personnes morales ou personnes physiques.

En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur, y compris votre adresse IP, la page que vous demandez et le pays de connexion.

Voici les différents types de cookies que nous utilisons sur notre site et qui permettent de naviguer sur notre site et d’utiliser ses différentes fonctionnalités.

Les cookies d’identification de session
Les cookies nécessaires à garantir la sécurité informatique de notre site pour empêcher par exemple des accès frauduleux à votre session. Ces cookies ne requièrent pas votre consentement.

Cookies de mesure d’audience 
Ces cookies nous permettent d’analyser votre navigation et votre comportement sur notre site afin de détecter d’éventuels problèmes et d’améliorer notre contenu. Par exemple, analyser les pages que vous cliquez, votre temps de connexion, les pages que vous consultez quand vous quittez notre site… Ces cookies ne requièrent pas votre consentement sauf dans certains cas prévus par la loi

Durée du consentement
La durée de mon consentement dépend du cookie concerné mais ne peut dans tous les cas excéder une durée de 6 mois maximum.

Vos droits
Une bannière informative vous a été présentée lors de votre visite sur notre site. Cette bannière vous a invité à accepter tous nos cookies ou les refuser. Nous vous rappelons qu’en cas de question, vous pouvez contacter notre délégué à la protection des données à l’adresse contact@africaunity.net en précisant dans l’objet le libellé « Protection des données » de votre mail.
<br>
 <br> <strong>2. Utilisation des informations </strong> <br>

Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :

Personnaliser votre expérience et répondre à vos besoins individuels
Améliorer notre site
Améliorer le service client et vos besoins de prise en charge
Vous contacter par e-mail
Vous aider lors de la navigation
<br>

<br> <strong>3. Confidentialité des informations </strong> <br>

Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n’importe quelle raison, sans votre consentement.

<br> <strong>4. Divulgation à des tiers </strong> <br>

Nous ne vendons, n’échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site Web, tant que ces parties conviennent de garder ces informations confidentielles.

<br> <strong>5. Protection des informations</strong> <br>

Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne. Les ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables sont conservés dans un environnement sécurisé.

<br> <strong>6. Protection des données personnelles </strong> <br>
Les informations recueillies ont pour but soit de vous identifier formellement pour vous donner accès à un espace sécurisé soit de collecter des éléments nous permettant de vous apporter des solutions et des réponses.
Vous bénéficiez d’un droit d’interrogation, d’accès, de rectification et d’opposition aux informations qui vous concernent, que vous pouvez exercer en nous contactant sur contact@africaunity.net ou via notre site  africaunity.net
<br>

<br> <strong>7. Responsabilité </strong> <br>
Les informations contenues dans ce site n’ont aucune valeur contractuelle et peuvent être modifiées à tout moment par AfricaUnity. AfricaUnity ne saurait garantir l’exactitude des informations contenues dans ce site ; en aucun cas la responsabilité de la société AfricaUnity ne pourra être mise en cause du fait de l’utilisation des informations diffusées ce site ou de l’absence d’informations spécifiques.
De plus un contrôle de droits n’est pas effectué lors des publications des contributeurs. Si une personne se sent lésée, elle pourrait envoyer un mail à contact@africaunity.net avec le libellé « Droits » ou signaler le contenu ou la personne via le site en signalant le point conflictuel.
<br>

<br> <strong>8. Consentement</strong> <br>

En utilisant notre site, vous consentez à notre politique de confidentialité et vous nous autorisez à utiliser vos contenus afin de faire votre promotion ainsi que celle du réseau social africaunity.net
<br>

<br> <strong>9. Se désabonner</strong> <br>

Nous utilisons l’adresse e-mail que vous fournissez pour vous envoyer des informations et mises à jour relatives à votre profil, votre société, vos messages internes, vos avis et commentaires, nos messages d'information ou de promotion etc. Si à n’importe quel moment vous souhaitez ne plus recevoir d’e-mails, vous pouvez nous envoyer un mail à contact@africaunity.net.
                        </p>
                    </div>
                    <div  class="px-8">
                        <button
                            type="button"
                            @click="toogleModal"
                            class="dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2 w-full rounded bg-primary-blue px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ExclamationCircleIcon } from "@heroicons/vue/24/solid";
import { reactive, ref, onMounted } from "vue";
import Error from "../components/Error.vue";

const props = defineProps({
    open: Boolean,
    toogleModal: Function
});


</script>
